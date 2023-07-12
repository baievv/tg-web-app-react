import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Dashboard.css";
import { message } from "antd";
import {
	requestLockStatus,
	openLock,
	closeLock,
} from "../../utils/lock-server";
const date = Date.now();
const clientId = "329721a18c01487ebe8c4f6ed920c4db";
const lockId = "9166406";
const accessToken = "cfbfd3e45cb1b35077f41756b8a6f448";

const Dashboard = () => {
	const { id } = useParams();
	const [messageApi, contextHolder] = message.useMessage();
	const [checked, setChecked] = useState({
		isOpen: true,
		fileName: "closed",
		status: "closed",
	});

	const onSwitch = () => {
		console.log("checked is", checked.isOpen);
		if (checked.isOpen === true) {
			setChecked({ isOpen: false, fileName: "closed", status: "closed" });
			messageApi.info("Lock is close", [1]);
		} else {
			setChecked({ isOpen: true, fileName: "opened", status: "open" });
			messageApi.info("Lock is open", [1]);
		}
	};

	useEffect(() => {
		console.log("Id =", id);
		const response = requestLockStatus(Date.now(), clientId, accessToken);
		// startRequest();
		// console.log(response);
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
									src={`/img/dashboard/icons/${checked.fileName}_lock.png`}
									alt=''
								/>
							</div>
							<div className='item_title'>Door</div>
							<div className='item_subtitle'>
								Lock is {checked.status}
							</div>
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
							<div className='item_subtitle'>Inside</div>
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
							<div className='item_subtitle'>Off</div>
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
