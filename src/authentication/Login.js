import { Link } from "react-router-dom";
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
export default function Login(){
    return(
        <>
        <Header/>
            <main id="main">
                <section class="intro-single">
                    <div class="container border border-success border-2 rounded pt-3">
                        <h1 className="text-center text-success">Login</h1>
                        <div class="row">
                            <div className="col-md-2 offset-md-1">
                                <label>Email</label>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" type="email"/>
                            </div>
                        </div>
                        <div class="row my-3">
                            <div className="col-md-2 offset-md-1">
                                <label>Password</label>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" type="password"/>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-success btn-lg w-25 mb-4">Login</button>
                        </div>
                    </div>
                </section>
            </main>
        <Footer/>
        </>
    )
}