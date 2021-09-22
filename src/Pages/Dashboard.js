import CardComponent from '../components/atoms/CardComponent/CardComponent'
import Navbar from '../components/atoms/Navbar/Navbar'
import './dashboard.css'
const DashboardPage = () => {
    return (
        <div className="root">
          <Navbar />
            <h1>Heelo</h1>
        <div className="scrolling-wrapper-flexbox">
         <CardComponent />
         <CardComponent />
         <CardComponent />
         <CardComponent />
         <CardComponent />
         <CardComponent />
         <CardComponent />
         <CardComponent />
         <CardComponent />

        </div>
      </div>
    )
}

export default DashboardPage
