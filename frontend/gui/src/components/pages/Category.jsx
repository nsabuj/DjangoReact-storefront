import React, { Component } from 'react'

export class Category extends Component {
    render() {
        return (
            <div class="container">
<div class="row">
	<div class="col-md-3 col-sm-6">
		<article class="card card-post">
		  <img src="images/posts/1.jpg" class="card-img-top"/>
		  <div class="card-body">
		    <h6 class="title">Trade Assurance</h6>
		    <p class="small text-uppercase text-muted">Order protection</p>
		  </div>
		</article> 
	</div> 
	<div class="col-md-3 col-sm-6">
		<article class="card card-post">
		  <img src="images/posts/2.jpg" class="card-img-top"/>
		  <div class="card-body">
		    <h6 class="title">Pay anytime</h6>
		    <p class="small text-uppercase text-muted">Finance solution</p>
		  </div>
		</article> 
	</div> 
	<div class="col-md-3 col-sm-6">
		<article class="card card-post">
		  <img src="images/posts/3.jpg" class="card-img-top"/>
		  <div class="card-body">
		    <h6 class="title">Inspection solution</h6>
		    <p class="small text-uppercase text-muted">Easy Inspection</p>
		  </div>
		</article> 
	</div> 
	<div class="col-md-3 col-sm-6">
		<article class="card card-post">
		  <img src="images/posts/4.jpg" class="card-img-top"/>
		  <div class="card-body">
		    <h6 class="title">Ocean and Air Shipping</h6>
		    <p class="small text-uppercase text-muted">Logistic services</p>
		  </div>
		</article> 
	</div> 
</div>
</div>
        )
    }
}

export default Category
