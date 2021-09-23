import { useEffect } from 'react'
import { Film } from 'react-feather'
import CardComponent from '../components/atoms/CardComponent/CardComponent'
import Navbar from '../components/atoms/Navbar/Navbar'
import useRedux from '../Helper/useRedux'
import { fetchSubject } from '../redux/Dashboard/dashboard.action'
import './dashboard.css'
const DashboardPage = () => {
  const query = "includes=chapters";
  const [{ subjects, loader,error }, dispatch] = useRedux('dashboard');

  useEffect(()=>{
    dispatch(fetchSubject(query));
  },[])

    return (
        <div className="root">
          <Navbar />
          <div className="product_grid">
          
         
            <h1 className="item_title">
              <span ><Film /></span>
              Heelo
              </h1>
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
        <div className="product_grid">
          
         
          <h1 className="item_title">
            <span ><Film /></span>
            Heelo
            </h1>
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
      <div className="product_grid">
          
         
          <h1 className="item_title">
            <span ><Film /></span>
            Heelo
            </h1>
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
      </div>
    )
}

export default DashboardPage
