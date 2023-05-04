import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const Form = () => {
    const {index} = useParams();
    const navigate = useNavigate();

    const [show,setShow]=useState(null);
    const [form,setForm]=useState({
        showName:'',
        language:'',
        price:'',
        email:'',
    });
    
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit=()=>{
        console.log(form);
        const savedShows = JSON.parse(localStorage.getItem('myShows'));
        savedShows.push(form);
        // console.log(form);
        // for(let i=0;i<savedShows.length;i++){
        //     console.log(i,savedShows[i]);
        // }
        localStorage.setItem('myShows', JSON.stringify(savedShows));
    };
    const getShow=async ()=>{
      let url="https://api.tvmaze.com/search/shows?q=all";
      let data=await fetch(url);
      let parsedData=await data.json();
      await setShow(parsedData[index]);
    //   console.log(parsedData);
    };
  
    useEffect(()=>{
      getShow();
      if(show){
        setForm({
            showName:show.show.name,
            language:show.show.language,
            price:show.show.weight,
            email:form.email,
        })
      }
    },[show]);
  return (
    <div className='container-xl px-4'>
      <h3 className='text-center'>Book Ticket</h3>
      <div className='row mt-3'>
        <div className='col-xl-8' style={{ margin: "auto" }}>
          <div className='card mb-4'>
            <div className='card-header'>Booking Details</div>
            <div className='card-body'>
              <form>
              {show?<div className='row gx-3 mt-3 mb-3'>
                  <div className='col-md-4 my-2'>
                    <label className='small mb-1' for='inputAddress'>
                        Show Name
                    </label>
                    <input
                      onChange={onChange}
                      required={true}
                      name='showName'
                      value={form.showName}
                      type='text'
                      className='form-control'
                      id='showName'
                      disabled
                    />
                  </div>
                  <div className='col-md-4 my-2'>
                    <label className='small mb-1' for='inputAddress'>
                        Language
                    </label>
                    <input
                      onChange={onChange}
                      required={true}
                      name='language'
                      value={form.language}
                      type='text'
                      className='form-control'
                      id='language'
                      disabled
                    />
                  </div>
                  <div className='col-md-4 my-2'>
                    <label className='small mb-1' for='inputAddress'>
                        Price
                    </label>
                    <input
                      onChange={onChange}
                      required={true}
                      name='price'
                      value={form.price}
                      type='number'
                      className='form-control'
                      id='price'
                      disabled
                    />
                  </div>
                </div>:""}
                <div className='mb-3'>
                    <label className='small mb-1' for='inputemail'>
                        Email address
                    </label>
                    <input
                        onChange={onChange}
                        required={true}
                        name='email'
                        value={form.email}
                        className='form-control'
                        id='inputemail'
                        type='email'
                        placeholder="Enter e-mail"
                    />
                </div>
                <div className='d-grid gap-2 mt-5'>
                  <button
                    className='btn btn-primary'
                    type='button'
                    onClick={onSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form