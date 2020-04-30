import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class WorkExperiece extends Component {
    render() {
        return (
            <div>
                <h3>Work Experience</h3>

                    <p className="years">2008-2013</p>
                    <p className="jobTitle"> Product Sorter for a major company - Tnuva. </p>
                            <ul>
                                <li> Ordering the company's products and sorting them on store shelves.</li>
                                <li>Applying changes in the store's shelves according to sales and company deals.</li>
                                <li>Maintenance for products and shelves : Cleaning, advertisement, display .</li>
                        </ul>
            <hr/>

                    <p className="years">2013-2016</p>
                    <p className="jobTitle"> Dairy Section Manager </p>
                            <ul>
                                <li>Adjusting and applaying planogram and working directly with customers and providers of goods.</li>
                                <li>Constant work with company reports ( Out of stock, Goods certificates, availability of products ) , ordering and sorting merchandise.</li>
                            </ul>
            <hr/>

                    <p className="years">2017-2019</p>
                    <p className="jobTitle"> Availability Manager </p>

                            <ul>
                                <li>Performing daily count of merchandise by sections and regulation.</li>
                                <li>Marking out of stock products, while supervising and changing the Stock quantity, and ordering new products accordingly.</li>
                                <li>Handling the store's reports ( goods certificates, out of stock, availability reports, low-sales products and more).</li>
                                <li>Handling with errors ( mistakes in certificates, damaged goods, false orders and more).</li>
                            </ul>
                                        <span style={{fontSize: '30px'}}>+</span>

                    <p className="jobTitle"> Safety Manager </p>
                            <ul>
                                <li>Performing daily and weekly routine checks of emergency systems.</li>
                                <li>Instructing store's employees with Safetly protocols and regulations.</li>                            
                                <li>Reporting and handling cases of industrial accidents and preventing future accidents.</li>                            
                                <li>Maintenance of Safety equipment ( orders, routine checks, malfunctioning equipment).</li>
                                <li>Work environment which requires responsibility, attention for details, and "passing the massage" to the employee.</li>
                            </ul>
                            <br/>
<Link to="/" style={{fontSize:'22px', textDecoration:'none'}}>Go back</Link>
            </div>
        )
    }
}
