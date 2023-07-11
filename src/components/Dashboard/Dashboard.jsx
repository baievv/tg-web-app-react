import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
	const { id } = useParams();

	useEffect(() => {
		console.log("Id =", id);
	}, []);

	return (
		<>
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
					<div className='dashboard_items'>
						<div className='dashboard_items_in'>sdfsdf</div>
					</div>
					<div className='dashboard_items'>
						<div className='dashboard_items_in'>sdfsdf</div>
					</div>
					<div className='dashboard_items'>
						<div className='dashboard_items_in'>sdfsdf</div>
					</div>
					<div className='dashboard_items'>
						<div className='dashboard_items_in'>sdfsdf</div>
					</div>
					<div className='dashboard_items'>
						<div className='dashboard_items_in'>sdfsdf</div>
					</div>
					<div className='dashboard_items'>
						<div className='dashboard_items_in'>sdfsdf</div>
					</div>
				</div>
				{/* ------------------------- */}
        <div className="footer">
          
        </div>
			</div>
		</>
	);
};

export default Dashboard;
