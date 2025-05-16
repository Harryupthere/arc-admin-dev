import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApiRequest from "../../hooks/useApiRequest";
import { API_ENDPOINTS } from "../../constants/endPoints";
import { errorMsg, successMsg } from "../../utils/customFn";
import "./TradeForm.scss";

const TradingAccountTypesForm = () => {
  const navigate = useNavigate();
  const { fetchData } = useApiRequest();
  const { id } = useParams();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    icon: "",
    max_profit: "",
    max_loss: "",
    min_profit: "",
    min_loss: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEditMode) getAccountTypeDetails();
  }, [id]);

  const getAccountTypeDetails = async () => {
    try {
      const res = await fetchData(`${API_ENDPOINTS.getTradingAccountTypes}?id=${id}`, navigate, "GET");
      if (res?.success) {
        const data = res.data[0];
        setFormData({
          name: data.name || "",
          description: data.description || "",
          icon: data.icon || "",
          max_profit: data.max_profit || "",
          max_loss: data.max_loss || "",
          min_profit: data.min_profit || "",
          min_loss: data.min_loss || "",
        });
      }
    } catch (error) {
      console.log("Error fetching account type details:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const requiredFields = ["name", "description", "icon", "max_profit", "max_loss", "min_profit", "min_loss"];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      } else if (!["name", "description", "icon"].includes(field) && isNaN(formData[field])) {
        newErrors[field] = "Must be a number";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      ...formData,
      max_profit: parseFloat(formData.max_profit),
      max_loss: parseFloat(formData.max_loss),
      min_profit: parseFloat(formData.min_profit),
      min_loss: parseFloat(formData.min_loss),
    };

    const endpoint = isEditMode
      ? `${API_ENDPOINTS.updateTradingAccountType}/${id}`
      : API_ENDPOINTS.createTradingAccountType;
    const method = isEditMode ? "PUT" : "POST";

    try {
      const res = await fetchData(endpoint, navigate, method, payload);
      if (res?.success) {
        successMsg(isEditMode ? "Account Type updated successfully!" : "Account Type created successfully!");
        navigate("/trading-account-types");
      } else {
        errorMsg(res?.message || "Something went wrong.");
      }
    } catch (error) {
      console.log("Submission Error:", error);
      errorMsg("An error occurred. Please try again.");
    }
  };

  return (
    <div className="trade-form-container">
      <div className="trade-form-card">
        <h2>{isEditMode ? "Edit Trading Account Type" : "Add Trading Account Type"}</h2>
        <form onSubmit={handleSubmit} className="trade-form-grid">
          {["name", "description", "icon", "max_profit", "max_loss", "min_profit", "min_loss"].map((field) => (
            <div key={field} className="form-group">
              <label>{field.replace("_", " ").toUpperCase()}</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={errors[field] ? "input-error" : ""}
              />
              {errors[field] && <span className="error-text">{errors[field]}</span>}
            </div>
          ))}

          <div className="form-actions full-width">
            <button type="submit" className="submit-btn">
              {isEditMode ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TradingAccountTypesForm;
