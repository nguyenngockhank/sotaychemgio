import React, { PropTypes } from 'react';

import APP_CONST from '../constants/app'

const Footer = (props) => (
 	<footer className="text-center">
        <div className="footer-above">
            <div className="container">
                <div className="row">
                    <div className="footer-col col-md-4">
                        <h3>Facebook  Page</h3>
                        <div className="fb-page" 
                          data-href="https://www.facebook.com/sotaychemgio"
                          data-width="380" 
                          data-hide-cover="false"
                          data-show-facepile="false" 
                          data-show-posts="false"></div>
                    </div>
                    <div id="footer-info" className="footer-col col-md-4">
                        <h3>Mạng xã hội</h3>
                        <ul className="list-inline">
                            <li>
                                <a href={APP_CONST.LINK_FB_FANPAGE} className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href={APP_CONST.LINK_ANDROID_APP} className="btn-social btn-outline"><i className="fa fa-fw fa-android"></i></a>
                            </li>
                            <li>
                                <a href={APP_CONST.LINK_GOOGLE_PLUS} className="btn-social btn-outline"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a rel="nofollow" href={APP_CONST.LINK_SKYPE} className="btn-social btn-outline"><i className="fa fa-fw fa-skype"></i></a>
                            </li>
                        </ul>
                        <div>
                            <div>
                                <strong><i className="fa fa-fw fa-envelope-o"></i>Email</strong> : {APP_CONST.APP_EMAIL}
                            </div>
                            <div>
                                <strong><i className="fa fa-fw fa-info"></i>Thông tin chi tiết</strong> : <a href="<?= info_url() ?>"> tại đây </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-col col-md-4">
                        <h3>Nhóm phát triển</h3>
                        <p>Website được xây dựng bởi <a href="http://codedem.com">CodeDem</a>.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-below">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        Copyright &copy; Sotaychemgio 2016
                    </div>
                </div>
            </div>
        </div>
    </footer>

);

export default Footer;