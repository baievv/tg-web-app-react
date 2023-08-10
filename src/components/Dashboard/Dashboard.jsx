import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Dashboard.css";
import { message } from "antd";
import { getTest } from "../../utils/lock-server";

const Dashboard = () => {
	const { id } = useParams();
	console.log("Param ID is -", id);
	const [messageApi, contextHolder] = message.useMessage();
	const [lockResponse, setLockResponse] = useState(null);
	const [checked, setChecked] = useState({
		isOpen: false,
		fileName: "closed",
		status: "closed",
	});

	const onSwitch = async () => {
		if (checked.isOpen === true) {
			setChecked({ isOpen: false, fileName: "closed", status: "closed" });
			let res = await getTest("switch");
			setLockResponse(res.status);
			messageApi.info("Lock is close", [1]);
		} else {
			let res = await getTest("switch");
			setLockResponse(res.status);
			setChecked({ isOpen: true, fileName: "opened", status: "open" });
			messageApi.info("Lock is open", [1]);
		}
	};

	const fetchData = async () => {
		return getTest("status").then((res) => {
			setLockResponse(res);
			if (res === "close") {
				setChecked({ isOpen: false, fileName: "closed", status: "closed" });
			} else {
				setChecked({ isOpen: true, fileName: "opened", status: "open" });
			}
			return res;
		});
	};

	useEffect(() => {
		fetchData().then((res) => {
			console.log("Result of getStatus- ", res);
			// Здесь вы можете делать что-то с res, который теперь содержит ответ
			// console.log(checked);
			// onSwitch();
		});
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
							<div className='item_subtitle'>Lock is {checked.status}</div>
						</div>
					</div>
					<div className='dashboard_items'>
						<div className='dashboard_items_in'>
							<div className='item_icon'>
								<img src='/img/dashboard/icons/thermometer_.png' alt='' />
							</div>
							<div className='item_title'>Temperature</div>
							<div className='item_subtitle'>Inside</div>
						</div>
					</div>
					<div className='dashboard_items'>
						<div className='dashboard_items_in'>
							<div className='item_icon'>
								<img src='/img/dashboard/icons/television_.png' alt='' />
							</div>
							<div className='item_title'>TV</div>
							<div className='item_subtitle'>Off</div>
						</div>
					</div>
					<div className='dashboard_items'>
						<div className='dashboard_items_in'>
							<div className='item_icon'>
								<img src='/img/dashboard/icons/dimmer_.png' alt='' />
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
								<img src='/img/dashboard/icons/floor_lamp_.png' alt='' />
							</div>
							<div className='item_title'>Floor lamp</div>
							<div className='item_subtitle'>Off</div>
						</div>
					</div>
				</div>
				{/* ------------------------- */}
				{/* <div className='footer'>{lockResponse}</div> */}
			</div>
		</>
	);
};

export default Dashboard;
