import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

export default function Register(){
    return(
        <>
         <Header/>
            <main id="main">
                <section class="intro-single">
                    <div class="container border border-success border-2 rounded pt-3">
                        <h1 className="text-center text-success">Register</h1>
                        <div class="row">
                            <div className="col-md-2 offset-md-1">
                                <label>Name</label>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" type="text"/>
                            </div>
                        </div>
                        <div class="row my-3">
                            <div className="col-md-2 offset-md-1">
                                <label>Contact</label>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" type="number"/>
                            </div>
                        </div>
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
                            <button className="btn btn-outline-success btn-lg w-25 mb-4">Register</button>
                        </div>
                    </div>
                </section>
            </main>
        <Footer/>
        </>
    )
}