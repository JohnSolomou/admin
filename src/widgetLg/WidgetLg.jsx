import React from "react";
import "./widgetLg.css";
import woman from "../../src/woman.jpg";
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={woman} alt="" className="widgetLgImg" />
              <span className="widgetLgName">Amanda Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2022</td>
            <td className="widgetLgAmount">$123.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={woman} alt="" className="widgetLgImg" />
              <span className="widgetLgName">Amanda Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2022</td>
            <td className="widgetLgAmount">$123.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={woman} alt="" className="widgetLgImg" />
              <span className="widgetLgName">Amanda Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2022</td>
            <td className="widgetLgAmount">$123.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={woman} alt="" className="widgetLgImg" />
              <span className="widgetLgName">Amanda Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2022</td>
            <td className="widgetLgAmount">$123.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
