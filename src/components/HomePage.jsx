import React, { Component } from 'react'
import { Card1, Card2,  HomeStyled, Section2, Section3 } from '../styles/HomePage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'
import FooterNav from './FooterNav'
import FanciNavBar from './FanciNavBar'




export default class HomePage extends Component {

    

    render() {
        return (
            <HomeStyled>
                <FanciNavBar/>
                <h3>Courses</h3>
                <Section2>
                    <Card1>
                        <img src="https://i.ibb.co/RDkTfHn/Img-1.png" alt="Img-1" border="0" />
                        <div>
                            <div>
                                <span>Elementary</span>
                                <p>For beginners and intermediates</p>
                            </div>
                            <div>
                                <p>
                                    <FontAwesomeIcon icon={faCircleDollarToSlot} />
                                    520
                                </p>
                            </div>
                        </div>
                    </Card1>
                    <Card1>
                        <img src="https://i.ibb.co/9yVjCWH/Img.png" alt="Img" border="0" />
                        <div>
                            <div>
                                <span>Advanced</span>
                                <p>For advanced</p>
                            </div>
                            <div>
                                <p>
                                    <FontAwesomeIcon icon={faCircleDollarToSlot} />
                                    1000
                                </p>
                            </div>
                        </div>
                    </Card1>
                </Section2>
                <Section3>
                    <Card2>
                        <div>
                            <img src="https://i.ibb.co/58x4xN7/Svg-7.png" alt="Svg-7" border="0" />
                        </div>
                        <div>
                            <p>
                                <span>In the kitchen</span><br />
                                Talking about food in the kitchen
                            </p>
                        </div>
                        <div>
                            <h6>30 min</h6>
                        </div>
                    </Card2>

                    <Card2>
                        <div>
                            <img src="https://i.ibb.co/47V3M2j/Svg-6.png" alt="Svg-6" border="0" />
                        </div>
                        <div>
                            <p>
                                <span>Bulletin board</span><br />
                                Shopping conversation topic near bulletin board
                            </p>
                        </div>
                        <div>
                            <h6>40 min</h6>
                        </div>
                    </Card2>

                    <Card2>
                        <div>
                            <img src="https://i.ibb.co/PCLbFvF/Svg-5.png" alt="Svg-5" border="0" />
                        </div>
                        <div>
                            <p>
                                <span>Night city</span> <br />
                                Night walk through the night city and a trip to a cafe
                            </p>
                        </div>
                        <div>
                            <h6>25 min</h6>
                        </div>
                    </Card2>

                    <Card2>
                        <div>
                            <img src="https://i.ibb.co/58x4xN7/Svg-7.png" alt="Svg-7" border="0" />
                        </div>
                        <div>
                            <p>
                                <span>Plan for the day</span> <br />
                                Mikey plans his day
                            </p>
                        </div>
                        <div>
                            <h6>19 min</h6>
                        </div>
                    </Card2>

                    <Card2>
                        <div>
                            <img src="https://i.ibb.co/QCsDkbS/Svg-4.png" alt="Svg-4" border="0" />
                        </div>
                        <div>
                            <p>
                                <span>two friends</span> <br />
                                Friends talk and tell their stories
                            </p>
                        </div>
                        <div>
                            <h6>28 min</h6>
                        </div>
                    </Card2>

                </Section3>
                <FooterNav/>
            </HomeStyled>
        )
    }
}
