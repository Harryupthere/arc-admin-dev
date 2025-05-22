import React, { useEffect, useState } from 'react'
import DashboardHeader from '../dasboardheader'
import useApiRequest from "../../hooks/useApiRequest";
import { API_ENDPOINTS } from "../../constants/endPoints";
import { useNavigate } from 'react-router-dom';
import ReactDatatable from '@ashvin27/react-datatable';

const InstantFunding = () => {
    const { fetchData } = useApiRequest()
    const navigate = useNavigate()
    const [list, setList] = useState([])

    useEffect(() => {
        callApi()
    }, [])

    const callApi = async () => {
        try {
            const tradeRes = await fetchData(API_ENDPOINTS.getInstantFundingPlans, navigate, "GET", {});
            if (tradeRes?.success) {
                setList(tradeRes?.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const columns = [
        {
            text: "S. No.",
            cell: (item, row) => (<>{row + 1}</>)
        },
        {
            key: "name",
            text: "Name",
            sortable: true,
        },
        {
            key: "description",
            text: "Description",
        },
        {
            key: "icon",
            text: "Icon",
            sortable: true,
        },
        {
            key: "image",
            text: "Image",
        },
        {
            key: "first_color",
            text: "First Color",
            sortable: true,
        },
        {
            key: "second_color",
            text: "Second Color",
        },
        {
            key: "account_size",
            text: "Account Size",
            sortable: true,
        },
        {
            key: "price",
            text: "Price",
        },

        {
            key: "profit_target",
            text: "Profit Target",
            sortable: true,
        },
        {
            key: "max_daily_loss",
            text: "Profit Target 2",
        },
        {
            key: "max_overall_loss",
            text: "Daily Loss Limit",
            sortable: true,
        },
        {
            key: "min_trading_days",
            text: "Drow Down",
        },
        {
            key: "boom_fi_paylink_id",
            text: "Boom Fi Link",
        },
        {
            key: "created_at",
            text: "Created At",
        },
        {
            key: "updated_at",
            text: "Updated At",
        },
        {
            key: 'status',
            text: 'Status',
        },
        {
            text: 'Actions',
            cell: (item) => (
                <button onClick={() => navigate(`${process.env.REACT_APP_BASE_URL}edit-instant-funding/${item.id}`)}>Edit</button>
            )
        },
    ]

    const configForTable = {
        page_size: 10,
        length_menu: [10, 20, 50],
        show_filter: true,
        show_pagination: true,
        pagination: "advance",
        button: {
            excel: true,
            print: false,
        },
    };

    return (
        <>
            <DashboardHeader heading="Instant Funding Plans" />
            <div className='main'>
                <div className='d-flex justify-content-end mb-3'>
                    <button className='btn btn-primary' onClick={() => navigate(`${process.env.REACT_APP_BASE_URL}add-instant-funding`)}>Add Permission</button>
                </div>
                <div className='customer-table'>
                    <div className='data-table-wrapped'>
                        <div className='data-table-container'>
                            <ReactDatatable
                                columns={columns}
                                records={list}
                                config={configForTable}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstantFunding
