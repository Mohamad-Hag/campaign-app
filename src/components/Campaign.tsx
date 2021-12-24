import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import IconButton from "./IconButton";
import Loader from "./Loader";
import "./styles/Campaign.css"

function Campaign(props: any)
{
    // Campaign List
    const [list, setList] = useState([{
        image: null,
        name: null,
        description: null
    }]);
    const [price, setPrice] = useState(0.00);
    const [soldCount, setSoldCount] = useState(0);
    const [totalSold, setTotalSold] = useState(0);

    // Functions --- 
    const getList = () =>
    {
        let api = "https://wawinner.its.ae/dev/public/api/v1/front-end/campaign";
        axios.get(api).then((response) =>
        {
            let data = response.data.data[0];
            let sold = data.quantity_sold;
            let total = data.ticket_count;
            let price = data.product_price;
            let image1 = data.product_id.image;
            let name1 = data.product_id.name;
            let description1 = data.product_id.description;
            let image2 = data.prize_id.image;
            let name2 = data.prize_id.name;
            let description2 = data.prize_id.description;

            let campaigns: any = [];
            campaigns.push({
                image: image1,
                name: "High Heel Shoes",
                description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
            }, {
                image: image2,
                name: "Studio Apartment",
                description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups"
            });

            setList(campaigns);
            setSoldCount(sold);
            setTotalSold(total);
            setPrice(price);
        }).catch((error) =>
        {
            console.log(error);
        });
    };

    useEffect(() =>
    {
        getList();
    }, []);

    return <div id={props.id} className="Campaign">
        {list.length > 1 ? <div className="campaign-cards">
            <Card id="campaign-card-1" image={list[0].image} title={list[0].name} description={list[0].description} slogan="Buy A" />
            <div className="campaign-counter-mobile">                
                    <button className="campaign-counter-btn-mobile"><i className="bi bi-plus-lg"></i></button>
                    <label className="campaign-counter-label-mobile">1</label>
                    <button className="campaign-counter-btn-mobile"><i className="bi bi-dash-lg"></i></button>                
            </div>
            <Card id="campaign-card-2" image={list[1].image} title={list[1].name} description={list[1].description} slogan="Get a chance to win" />
        </div> : <Loader />}
        {list.length > 1 ? <div className="campaign-actions">
            <IconButton iconClass="bi bi-heart-fill" />
            <IconButton iconClass="bi bi-cart" type="secondary" />
        </div> : null}
        {list.length > 1 ?
            <div className="campaign-counter">
                <div className="campaign-counter-inner">
                    <button className="campaign-counter-btn"><i className="bi bi-plus-lg"></i></button>
                    <label className="campaign-counter-label">1</label>
                    <button className="campaign-counter-btn"><i className="bi bi-dash-lg"></i></button>
                </div>
            </div> : null}
        {list.length > 1 ?
            <label className="campaign-price">AED {price}</label> : null}
        {list.length > 1 ?
            <svg className="campaign-sold" height={200} width={200}>
                <defs>
                    <filter id="campaign-shadow-circle-filter">
                        <feDropShadow dx={-2} dy={2} stdDeviation={4} floodOpacity={0.2} floodColor="black"></feDropShadow>
                    </filter>
                </defs>
                <circle cx={100} cy={100} r={95} fill="var(--primary-bg)" strokeWidth={10} stroke="var(--accent-bg)"></circle>
                <circle cx={100} cy={100} r={95} fill="none" strokeWidth={10} stroke="var(--accent-1-cr)" strokeDasharray="596.902 596.902" strokeDashoffset={0} strokeLinecap="round">
                    <animate
                        attributeName="stroke-dashoffset"
                        dur=".5s"
                        fill="freeze"
                        to={-447.676}
                    />
                </circle>
                <circle cx={100} cy={100} r={70} fill="var(--primary-bg)" filter="url(#campaign-shadow-circle-filter)"></circle>
                <g alignmentBaseline="middle">
                    <text x="50%" y="80" style={{ font: "bold 30px sans-serif" }} fill="var(--accent-2-cr)" textAnchor="middle">{soldCount}</text>
                    <text x="50%" y="100" style={{ font: "bold 15px sans-serif" }} textAnchor="middle" fill="#444">SOLD</text>
                    <text x="50%" y="120" style={{ font: "12px sans-serif" }} textAnchor="middle" fill="gray">OUT OF</text>
                    <text x="50%" y="140" style={{ font: "bold 15px sans-serif" }} textAnchor="middle" fill="gray">{totalSold}</text>
                </g>
            </svg> : null}
    </div>
}

export default Campaign;