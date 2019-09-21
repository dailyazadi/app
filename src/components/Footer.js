import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid pl-0 pr-0">
        <div className="dropdown-divider border-dark mb-0 pb-0"></div>
        <div className="dropdown-divider border-dark pb-3 mt-1 pt-0"></div>
        <div className="pl-4 pr-4">
          <div>
            <h3>روزنامہ آزدی کوئٹہ</h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h5>بانی: صدیق بلوچ</h5>
            </div>
            <div className="col-md-4">
              <h5>رابطہ</h5>
              <address>
                ہیڈ آفس : ایکسپریس ہاؤس پٹیل ہاؤسنگ سوسائٹی سریاب روڈ کوئٹہ
                <br />
                فون نمبر : 4 -2451981 – 81 – 92+
                <br />
                فیکس نمبر : 4 -2451983 – 81- 92+
                <br />
                ای میل : dailyazadi@gmail.com
                <br />
                dailyazadi@cyber.net.pk
                <br />
                bexpress@brain.net.pk
                <br />
                news@dailybalochistanexpress.com
                <br />
                کراچی آفس : 315 UNI شاپنگ سینٹر عبداللہ ہارون روڈ، صدر کراچی
                <br />
                فون نمبر: 35662410 – 21 – 92+
                <br />
                فیکس نمبر: 352138892 – 21 – 92
                <br />
                ای میل: aarifbaloch@yahoo.com
                <br />
              </address>
            </div>
            <div className="col-md-4">
              <h5>سوشل میڈیا</h5>
              <ul>
                <li>
                  <a
                    className="btn"
                    href="https://www.facebook.com/pages/Daily-Azadi-Quetta/165084746856640"
                  >
                    <FontAwesomeIcon icon="spinner" /> فیس بُک
                  </a>
                </li>
                <li>
                  <a className="btn" href="https://twitter.com/dailyazadiquett">
                    <i className="fa fa-twitter fa-lg"></i> ٹوئٹر
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
