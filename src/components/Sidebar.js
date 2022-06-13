import React, {Component} from "react";

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className={"sidebar "}>
                    <div className={"logo-details"}>
                        <i className='bx bxl-c-plus-plus'></i>
                        <span className={"logo_name"}>CodingLap</span>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <a href={""}>
                                <i className='bx bx-grid-alt'></i>
                                <span className="link-name">Dashboard</span>
                                <ul className="sub-menu blank">
                                    <li>
                                        {/*<a href={""}>Web design</a>*/}
                                    </li>
                                </ul>
                            </a>
                        </li>
                        <li>
                            <div className="icon-link">
                                <a href={""}>
                                    <i className='bx bx-collection'></i>
                                    <span className="link-name">Category</span>
                                </a>
                                <i className='bx bx-chevron-down arrow'></i>
                                <ul className="sub-menu">
                                    {/*<li>*/}
                                    {/*    <a href={""}>Web design</a>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <a href={""}>Web design</a>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <a href={""}>Web design</a>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="icon-link">
                                <a href={""}>
                                    <i className='bx bx-slideshow'></i>
                                    <span className="link-name">Posts</span>
                                </a>
                                <i className='bx bx-chevron-down arrow'></i>
                                <ul className="sub-menu">
                                    {/*<li>*/}
                                    {/*    <a href={""}>Web design</a>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <a href={""}>Web design</a>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <a href={""}>Web design</a>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href={""}>
                                <i className='bx bx-pie-chart-alt-2'></i>
                                <span className="link-name">Analytics</span>
                                <ul className="sub-menu blank">
                                    {/*<li>*/}
                                    {/*    <a href={""}>Web design</a>*/}
                                    {/*</li>*/}
                                </ul>
                            </a>
                        </li>
                        <li>
                            <a href={""}>
                                <i className='bx bx-line-chart'></i>
                                <span className="link-name">Analytics</span>
                                <ul className="sub-menu blank">
                                    {/*<li>*/}
                                    {/*    <a href={""}>Web design</a>*/}
                                    {/*</li>*/}
                                </ul>
                            </a>
                        </li>
                        <li>
                            <div className="icon-link">
                                <a href={""}>
                                    <i className='bx bx-plug'></i>
                                    <span className="link-name">Plugins</span>
                                </a>
                                <i  className='bx bx-chevron-down arrow'></i>
                                <ul className="sub-menu">
                                    {/*<li>*/}
                                    {/*    <a href={""}>Web design</a>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <a href={""}>Web design</a>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <a href={""}>Web design</a>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="profile-details">
                                <div className="profile-content">
                                    <img src="../public/imgs/chó tùng.jpg" alt="gg"/>
                                </div>
                                <div className="name-job" style={{paddingRight: '17px'}}>
                                    <div className="profile-name">Gia Thinh</div>
                                    <div className="job">Junior</div>
                                </div>
                                <i className='bx bx-log-out'></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;