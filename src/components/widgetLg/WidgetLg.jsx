import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({type})=>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
        <h3 className="wiggetLGTitle">Latest transactions</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=612x612&w=is&k=20&c=9kBKwtbWjpmKijKZcaZpYUHWKdVVRm56bhQwTIisE1w=" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">14 Mar 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=612x612&w=is&k=20&c=9kBKwtbWjpmKijKZcaZpYUHWKdVVRm56bhQwTIisE1w=" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">14 Mar 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type="Decline"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=612x612&w=is&k=20&c=9kBKwtbWjpmKijKZcaZpYUHWKdVVRm56bhQwTIisE1w=" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">14 Mar 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type="pending"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=612x612&w=is&k=20&c=9kBKwtbWjpmKijKZcaZpYUHWKdVVRm56bhQwTIisE1w=" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">14 Mar 2023</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
          </tr>
        </table>
    </div>
  )
}
