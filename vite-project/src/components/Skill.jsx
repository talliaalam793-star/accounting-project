import React from 'react';
import './Skill.css';

const Skill = () => {
  return (
    <section className="skill-section" id="skills">
      <div className="skill-container">
        <p className="section-subtitle">— Skills & Tools —</p>
        <h2>My Professional Skills</h2>

        <div className="skills-marquee">
          {/* First Row - Scrolls Left */}
          <div className="marquee-track row1">
            {/* Repeated for seamless loop */}
            <img src="https://1000logos.net/wp-content/uploads/2023/05/QuickBooks-Logo.png" alt="QuickBooks" />
            <img src="https://download.logo.wine/logo/Microsoft_Excel/Microsoft_Excel-Logo.wine.png" alt="Microsoft Excel" />
            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/B00-M365-Word-App-Icon" alt="Microsoft Word" />
            <img src="https://1000logos.net/wp-content/uploads/2023/04/Microsoft-Office-logo.png" alt="Microsoft Office" />
            <img src="https://www.creativefabrica.com/wp-content/uploads/2021/04/21/Financial-report-icon-Graphics-11166523-1-1-580x386.jpg" alt="Financial Reporting" />
            <img src="https://www.shutterstock.com/shutterstock/photos/2678638917/display_1500/stock-vector-bookkeeping-icon-accounting-icon-business-icon-vector-art-illustration-2678638917.jpg" alt="Bookkeeping" />
            <img src="https://i.pinimg.com/736x/a1/5f/51/a15f5117759cd710fae6ab2461250f4a.jpg" alt="Inventory Management" />
            <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/v/e/vendor_sourcing_procurement_process_colored_icon_in_powerpoint_pptx_png_and_editable_eps_format_slide01.jpg" alt="Procurement" />

            {/* Duplicate for infinite loop */}
            <img src="https://1000logos.net/wp-content/uploads/2023/05/QuickBooks-Logo.png" alt="QuickBooks" />
            <img src="https://download.logo.wine/logo/Microsoft_Excel/Microsoft_Excel-Logo.wine.png" alt="Microsoft Excel" />
            <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/B00-M365-Word-App-Icon" alt="Microsoft Word" />
            <img src="https://1000logos.net/wp-content/uploads/2023/04/Microsoft-Office-logo.png" alt="Microsoft Office" />
            <img src="https://www.creativefabrica.com/wp-content/uploads/2021/04/21/Financial-report-icon-Graphics-11166523-1-1-580x386.jpg" alt="Financial Reporting" />
            <img src="https://www.shutterstock.com/shutterstock/photos/2678638917/display_1500/stock-vector-bookkeeping-icon-accounting-icon-business-icon-vector-art-illustration-2678638917.jpg" alt="Bookkeeping" />
            <img src="https://i.pinimg.com/736x/a1/5f/51/a15f5117759cd710fae6ab2461250f4a.jpg" alt="Inventory Management" />
            <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/v/e/vendor_sourcing_procurement_process_colored_icon_in_powerpoint_pptx_png_and_editable_eps_format_slide01.jpg" alt="Procurement" />
          </div>

          {/* Second Row - Scrolls Right */}
          <div className="marquee-track row2">
            {/* Repeated for seamless loop */}
            <img src="https://static.vecteezy.com/system/resources/previews/048/048/358/non_2x/a-set-of-10-accounting-icons-as-cash-flow-budget-bank-reconciliation-vector.jpg" alt="Bank Reconciliation" />
            <img src="https://static.vecteezy.com/system/resources/previews/035/167/263/non_2x/solid-icon-for-payroll-vector.jpg" alt="Payroll Management" />
            <img src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063709224484" alt="Tally ERP" />
            <img src="https://freepngimg.com/download/icon/development/9662-typing.svg" alt="Typing" />
            <img src="https://1000logos.net/wp-content/uploads/2023/05/QuickBooks-Logo.png" alt="QuickBooks Advanced" />

            {/* Duplicate for infinite loop */}
            <img src="https://static.vecteezy.com/system/resources/previews/048/048/358/non_2x/a-set-of-10-accounting-icons-as-cash-flow-budget-bank-reconciliation-vector.jpg" alt="Bank Reconciliation" />
            <img src="https://static.vecteezy.com/system/resources/previews/035/167/263/non_2x/solid-icon-for-payroll-vector.jpg" alt="Payroll Management" />
            <img src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063709224484" alt="Tally ERP" />
            <img src="https://freepngimg.com/download/icon/development/9662-typing.svg" alt="Typing" />
            <img src="https://1000logos.net/wp-content/uploads/2023/05/QuickBooks-Logo.png" alt="QuickBooks Advanced" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;