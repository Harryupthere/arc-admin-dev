import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApiRequest from "../../hooks/useApiRequest";
import { API_ENDPOINTS } from "../../constants/endPoints";
import { errorMsg, successMsg } from "../../utils/customFn";
import "./instantFunding.scss";

const defaultFields = {
  name: "",
  description: "",
  icon: "",
  image: "",
  first_color: "",
  second_color: "",
  account_size: "",
  price: "",
  profit_target: "",
  max_daily_loss: "",
  max_overall_loss: "",
  min_trading_days: "",
  status: "",
  boom_fi_paylink_id: ""
};

const InstantFundingForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;
  const { fetchData } = useApiRequest();

  const [formData, setFormData] = useState(defaultFields);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isEditMode) getPlanDetails();
  }, [id]);

  const getPlanDetails = async () => {
    try {
      const res = await fetchData(`${API_ENDPOINTS.getInstantFundingPlans}?id=${id}`, navigate, "GET");
      if (res?.success) {
        const data = res.data[0];
        setFormData({
          name: data.name || "",
          description: data.description || "",
          icon: data.icon || "",
          image: data.image || "",
          first_color: data.first_color || "",
          second_color: data.second_color || "",
          account_size: data.account_size || "",
          price: data.price || "",
          profit_target: data.profit_target || "",
          max_daily_loss: data.max_daily_loss || "",
          max_overall_loss: data.max_overall_loss || "",
          min_trading_days: data.min_trading_days || "",
          status: data.status || "",
          boom_fi_paylink_id: data.boom_fi_paylink_id || ""
        });
      }
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const requiredFields = [
      "name", "description", "icon", "image", "account_size", "price", 
      "profit_target", "max_daily_loss", "max_overall_loss", 
      "min_trading_days", "status"
    ];
    const newErrors = {};

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = { ...formData };
    const endpoint = isEditMode
      ? `${API_ENDPOINTS.updateInstantFundingPlans}/${id}`
      : API_ENDPOINTS.createInstantFundingPlans;
    const method = isEditMode ? "PUT" : "POST";

    try {
      const res = await fetchData(endpoint, navigate, method, payload);
      if (res?.success) {
        successMsg(res.message);
        navigate(`${process.env.REACT_APP_BASE_URL}instant-funding-plans`);
      } else {
        errorMsg(res.message || "Failed to submit data.");
      }
    } catch (error) {
      console.log("Submit Error:", error);
      errorMsg("An error occurred.");
    }
  };

  return (
    <div className="trade-form-container">
    <div className="trade-form-card">

        <h2>{isEditMode ? "Edit Instant Funding Plan" : "Add Instant Funding Plan"}</h2>
        <form onSubmit={handleSubmit} className="trade-form-grid">

          {Object.keys(defaultFields).map((field) => (
            <div key={field} className="form-group">
              <label>{field.replace(/_/g, " ").toUpperCase()}</label>

              {field === "status" ? (
                <select
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={errors[field] ? "input-error" : ""}
                >
                  <option value="">Select Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              ) : (
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={errors[field] ? "input-error" : ""}
                />
              )}

              {errors[field] && <span className="error-text">{errors[field]}</span>}
            </div>
          ))}

          <div className="form-actions full-width">
            <button type="submit" className="submit-btn">
              {isEditMode ? "Update Plan" : "Add Plan"}
            </button>
          </div>
        </form>
      </div>
      </div>

  );
};

export default InstantFundingForm;
