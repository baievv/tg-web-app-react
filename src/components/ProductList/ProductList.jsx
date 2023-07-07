import React, { useState } from "react";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";
import { useCallback, useEffect } from "react";

const products = [
	{
		id: "1",
		title: "Джинсы",
		price: 5000,
		description: "Синего цвета, прямые",
		imgUrl: "/img/1.png",
	},
	{
		id: "2",
		title: "Куртка",
		price: 12000,
		description: "Зеленого цвета, теплая",
		imgUrl: "/img/2.png",
	},
	{
		id: "3",
		title: "Джинсы 2",
		price: 5000,
		description: "Синего цвета, прямые",
		imgUrl: "/img/3.png",
	},
	{
		id: "4",
		title: "Куртка 8",
		price: 122,
		description: "Зеленого цвета, теплая",
		imgUrl: "/img/4.png",
	},
	{
		id: "5",
		title: "Джинсы 3",
		price: 5000,
		description: "Синего цвета, прямые",
		imgUrl: "/img/5.png",
	},
	{
		id: "6",
		title: "Куртка 7",
		price: 600,
		description: "Зеленого цвета, теплая",
		imgUrl: "/img/6.png",
	},
];

const getTotalPrice = (items = []) => {
	return items.reduce((acc, item) => {
		return (acc += item.price);
	}, 0);
};

const ProductList = () => {
	const [addedItems, setAddedItems] = useState([]);
	const { tg, queryId } = useTelegram();

	const onSendData = useCallback(() => {
		const data = {
			products: addedItems,
			totalPrice: getTotalPrice(addedItems),
			queryId,
		};
		fetch("http://localhoast:3000/web-data", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
	}, [addedItems]);

	useEffect(() => {
		tg.onEvent("mainButtonClicked", onSendData);
		return () => {
			tg.offEvent("mainButtonClicked", onSendData);
		};
	}, [onSendData]);

	const onAdd = (product) => {
		const alreadyAdded = addedItems.find((item) => item.id === product.id);
		let newItems = [];

		if (alreadyAdded) {
			newItems = addedItems.filter((item) => item.id !== product.id);
		} else {
			newItems = [...addedItems, product];
		}

		setAddedItems(newItems);

		if (newItems.length === 0) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
			tg.MainButton.setParams({
				text: `Купить ${getTotalPrice(newItems)}`,
			});
		}
	};

	return (
		<div className={"list"}>
			{products.map((item) => (
				<ProductItem product={item} onAdd={onAdd} className={"item"} />
			))}
		</div>
	);
};

export default ProductList;
