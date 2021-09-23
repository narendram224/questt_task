import { useEffect } from 'react'
import { Film } from 'react-feather'
import CardComponent from '../components/atoms/CardComponent/CardComponent'
import Navbar from '../components/atoms/Navbar/Navbar'
import Spin from '../components/atoms/Spin'
import useRedux from '../Helper/useRedux'
import { fetchSubject } from '../redux/Dashboard/dashboard.action'
import './dashboard.css'
const DashboardPage = () => {
  const query = "includes=chapters";
  const [{ subjects, loading, error }, dispatch] = useRedux('dashboard');

  useEffect(() => {
    dispatch(fetchSubject(query));
  }, [])

  return (
    <div className="root">
      <Navbar />
      <div>
        {
          error['subjects'] ?
            <div className="title">
              <span ><Film /></span>
              <h2>Something went wrong while fetching the data</h2>
            </div> :
            <>
              {Array.isArray(subjects) &&
                <div>

                  {
                    !loading['subjects'] ? subjects.map((subject) => {
                      return (
                        <div className="product_grid">
                          <div className="item_title">
                            <span ><Film /></span>
                            <h2>{subject && subject['chapter'] && subject['chapter'][0]['subject'] ? subject['chapter'][0]['subject'] : "No Data"}</h2>
                          </div>
                          <div className="scrolling-wrapper-flexbox">
                            {
                              subject['chapter'] && Array.isArray(subject['chapter']) && subject['chapter'][0]['data'].map((item) => {
                                return (
                                  <CardComponent quest_count={item['quest_count']} subject={subject['chapter'][0]['subject']} title={item['title']} type={item['type']} />
                                )
                              })


                            }

                          </div>
                        </div>
                      )
                    }
                    ) :
                      <div>
                        <Spin />
                      </div>
                  }


                </div>

              }
            </>

        }
      </div>


    </div>
  )
}

export default DashboardPage
