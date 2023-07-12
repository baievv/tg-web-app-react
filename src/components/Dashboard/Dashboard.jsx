import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Dashboard.css";
import { Switch, message } from "antd";

const Dashboard = () => {
	const { id } = useParams();
	const [messageApi, contextHolder] = message.useMessage();
	const [checked, setChecked] = useState(true);

	const onSwitch = () => {
		console.log("checked is", checked);
		if (checked === true) {
			setChecked(false);
			messageApi.info("Lock is close", [1]);
		} else {
			setChecked(true);
			messageApi.info("Lock is open", [1]);
		}
		// messageApi.info("Lock is close", [1]);
	};

	useEffect(() => {
		console.log("Id =", id);
	}, []);

	return (
		<>
			{contextHolder}
			<div className='container'>
				<div className='view'>
					<div className='view_items'>
						<div className='view_info'>Yarocka Batumi</div>
						<div className='view_data'>
							<div className='view_data_items'>
								<img
									src='/img/dashboard/icons/temperature.png'
									alt='Temperature'
								></img>
								<span>21C</span>
							</div>
							<div className='view_data_items'>
								<img
									src='/img/dashboard/icons/humi.png'
									className='view_data_items_icon'
									alt='Humidity'
								></img>
								<span>81%</span>
							</div>
						</div>
					</div>
				</div>
				{/* Визуал дашборда */}
				<div className='dashboard'>
					<div className='dashboard_items' onClick={onSwitch}>
						<div className='dashboard_items_in'>
							<div className='item_icon'>
								<img
									src='/img/dashboard/icons/closed_lock.png'
									alt=''
								/>
							</div>
							<div className='item_title'>Door</div>
							<div className='item_subtitle'>Lock is closed</div>
						</div>
					</div>
					<div className='dashboard_items'>
						<div className='dashboard_items_in'>
							<div className='item_icon'>
								<img
									src='/img/dashboard/icons/thermometer_.png'
									alt=''
								/>
							</div>
							<div className='item_title'>Temperature</div>
							<div className='item_subtitle'>Lock is closed</div>
						</div>
					</div>
					<div className='dashboard_items'>
						<div className='dashboard_items_in'>
							<div className='item_icon'>
								<img
									src='/img/dashboard/icons/television_.png'
									alt=''
								/>
							</div>
							<div className='item_title'>TV</div>
							<div className='item_subtitle'>Lock is closed</div>
						</div>
					</div>
					<div className='dashboard_items'>
						<div className='dashboard_items_in'>
							<div className='item_icon'>
								<img
									src='/img/dashboard/icons/dimmer_.png'
									alt=''
								/>
							</div>
							<div className='item_title'>Main light</div>
							<div className='item_subtitle'>Off</div>
						</div>
					</div>
					<div className='dashboard_items'>
						<div className='dashboard_items_in'>
							<div className='item_icon'>
								<img
									src='/img/dashboard/icons/air-conditioner.png'
									alt=''
								/>
							</div>
							<div className='item_title'>Conditioner</div>
							<div className='item_subtitle'>On</div>
						</div>
					</div>
					<div className='dashboard_items'>
						<div className='dashboard_items_in'>
							<div className='item_icon'>
								<img
									src='/img/dashboard/icons/floor_lamp_.png'
									alt=''
								/>
							</div>
							<div className='item_title'>Floor lamp</div>
							<div className='item_subtitle'>Off</div>
						</div>
					</div>
				</div>
				{/* ------------------------- */}
				<div className='footer'>
					Width is
					{window.innerWidth}, Height is
					{window.innerHeight}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
