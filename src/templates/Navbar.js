import * as React from 'react'
import '../sass/navbar.scss'
import {Component} from 'react'

class Navbar extends Component {
    openMenu(){
        let navbarMenu = document.querySelector('.navbar-menu');
        if (navbarMenu.style.display === 'flex') {
            navbarMenu.style.display = 'none';
            return;
        }
        navbarMenu.style.display = 'flex';
    }
    render(){
        return (
            <div className="navbar">
                <div className="container">
                    <a className="logo" href="/">
                        <svg width="85" height="17" viewBox="0 0 98 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0.270813H12.957V2.52288H2.4997V8.36684H11.9956V10.6189H2.4997V18.7434H0V0.270813Z"
                                  fill="#1C1917"></path>
                            <path
                                d="M24.6272 2.65116C26.3577 0.883721 28.6799 0 31.5642 0C34.4633 0 36.7707 0.883721 38.516 2.65116C40.2614 4.4186 41.1488 6.69917 41.208 9.50713C41.1488 12.3151 40.2614 14.5956 38.516 16.3631C36.7707 18.1305 34.4633 19.0143 31.5642 19.0143C28.6651 19.0143 26.3577 18.1305 24.6124 16.3631C22.867 14.5956 21.9796 12.3151 21.9204 9.50713C21.9796 6.69917 22.8818 4.40435 24.6272 2.65116ZM24.4349 9.50713C24.4349 11.6024 25.0709 13.3413 26.3429 14.7097C27.615 16.078 29.3603 16.7622 31.5642 16.7622C33.7681 16.7622 35.5134 16.078 36.8003 14.7097C38.0871 13.3413 38.7231 11.6024 38.7231 9.50713C38.7231 7.41185 38.0871 5.67292 36.8003 4.30458C35.5134 2.93623 33.7681 2.25206 31.5642 2.25206C29.3603 2.25206 27.615 2.93623 26.3429 4.30458C25.0709 5.67292 24.4349 7.3976 24.4349 9.50713Z"
                                fill="#1C1917"></path>
                            <path
                                d="M63.1284 18.7434V16.8905C63.1284 15.2656 62.9509 14.1538 62.6107 13.5551C62.448 13.2416 62.2262 12.8995 61.9451 12.5431C61.3831 11.8732 60.4069 11.5454 59.0165 11.5454H53.3367V18.7434H50.837V0.270813H58.4692C60.9541 0.270813 62.8326 0.769688 64.0751 1.75318C65.3175 2.73668 65.9387 4.03375 65.9387 5.64441C65.9387 6.72768 65.6429 7.68267 65.0365 8.53788C64.4301 9.39309 63.5574 10.0203 62.4037 10.4051V10.4621C64.5632 11.0037 65.6429 13.0135 65.6429 16.4629V18.7434H63.1284ZM58.2917 9.26481C59.8596 9.26481 61.1168 8.96549 62.0339 8.36684C62.9509 7.76819 63.4243 6.92723 63.4243 5.85821C63.4243 4.77494 63.0249 3.96249 62.2262 3.39234C61.4275 2.8222 60.0667 2.55138 58.1438 2.55138H53.3072V9.26481H58.2917Z"
                                fill="#1C1917"></path>
                            <path
                                d="M93.1099 0.270813H97.0147V18.7434H94.5151V2.80795H94.4559L87.6964 18.7434H85.1079L78.3336 2.80795H78.304V18.7434H75.8043V0.270813H79.7092L86.38 16.0638H86.4391L93.1099 0.270813Z"
                                fill="#1C1917"></path>
                        </svg>
                    </a>
                    <div className="menu">
                        <div>
                            <button type="button" onClick={() => this.openMenu()}>
                                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                                     className="menu-icon">
                                    <path
                                        d="M1.20013 0.399902C0.795125 0.399902 0.466797 0.72823 0.466797 1.13324C0.466797 1.53824 0.795125 1.86657 1.20013 1.86657H18.8001C19.2051 1.86657 19.5335 1.53824 19.5335 1.13324C19.5335 0.72823 19.2051 0.399902 18.8001 0.399902H1.20013ZM0.466797 6.9999C0.466797 6.5949 0.795125 6.26657 1.20013 6.26657H18.8001C19.2051 6.26657 19.5335 6.5949 19.5335 6.9999C19.5335 7.40491 19.2051 7.73324 18.8001 7.73324H1.20013C0.795125 7.73324 0.466797 7.40491 0.466797 6.9999ZM0.466797 12.8666C0.466797 12.4616 0.795125 12.1332 1.20013 12.1332H18.8001C19.2051 12.1332 19.5335 12.4616 19.5335 12.8666C19.5335 13.2715 19.2051 13.5999 18.8001 13.5999H1.20013C0.795125 13.5999 0.466797 13.2715 0.466797 12.8666Z"
                                        fill="#A8A29E"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="navbar-menu">
                    <ul className="navbar-nav">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="/">Lorem ipsum</a></li>
                        <li><a href="/">Lorem ipsum</a></li>
                        <li><a href="/">Lorem ipsum</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Navbar
