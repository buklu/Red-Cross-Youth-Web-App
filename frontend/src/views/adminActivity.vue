<template>
    <div>
        <div class="wrapper ">
            <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                <div class="logo"><a href="http://www.creative-tim.com" class="simple-text logo-normal">Profile</a></div>
                    <div class="main-panel">
                    </div>
                </div>
            </div>
            <!-- Navbar -->
            <adminN/>
            <!-- <%-include('./partials/adminNavbar.ejs') %>  -->
        
            <!-- ======= Breadcrumbs ======= -->
            <section class="breadcrumbs">
            <div class="container">

                <div class="d-flex justify-content-between align-items-center">
                <h2>Activity Reports</h2>
                <ol>
                    <li><a href="/admin"><router-link :to="{name: 'adminhome'}">Home</router-link></a></li>
                    <li>Activity Reports</li>
                </ol>
                </div>

            </div>
            </section><!-- End Breadcrumbs -->

            <section class="inner-page">
            <div class="container">
                <div>
                <a href="/addReport" class = "btn btn-danger">+ Add Report</a>
                </div>
                <div>
                <div class="my-3 p-3 bg-white rounded shadow-sm">
                    <h6 class="border-bottom border-gray pb-2 mb-0">Your Reports</h6>
                    <div class="media text-muted pt-3"><!-- xmlns="#www.w3.org/2000/svg" -->
                    <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32"  preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong class="d-block text-gray-dark">@username</strong>
                        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                    </p>
                    <small>
                        <a href="#"><p>Edit</p></a>
                        <a href="#" data-toggle="modal"  data-target="#deleteModal" ><p>Delete</p></a>
                        
                        <!-- Modal to Delete -->
                        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Delete</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Are you sure you want to delete this?</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        End of Modal  -->
                    </small>  
                    </div><!-- -->
                    <div class="media text-muted pt-3"><!--xmlns="#www.w3.org/2000/svg"-->
                    <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32"  preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong class="d-block text-gray-dark">@username</strong>
                        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                    </p>
                    <small>
                        <a href="#"><p>Edit</p></a>
                        <a href="#" data-toggle="modal"  data-target="#deleteModal" ><p>Delete</p></a>
                        
                        <!-- Modal to Delete -->
                        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Delete</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Are you sure you want to delete this?</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <!-- End of Modal  -->
                    </small>  
                    </div>
                    <div class="media text-muted pt-3"><!-- xmlns="#www.w3.org/2000/svg" -->
                    <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32"  preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong class="d-block text-gray-dark">@username</strong>
                        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                    </p>
                    <small>
                        <a href="#"><p>Edit</p></a>
                        <a href="#" data-toggle="modal"  data-target="#deleteModal" ><p>Delete</p></a>
                        
                        <!-- Modal to Delete -->
                        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Delete</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Are you sure you want to delete this?</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <!-- End of Modal  -->
                    </small>  
                    </div>
                    <!-- Modal -->
                    <div class="modal fade" id="myModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="myModalLabel">Activity Form</h5>
                            <button>
                                <a href="" data-dismiss="modal"><i class="icofont-close"></i></a>
                            </button>
                            </div>
                            <div class="modal-body">
                            <div class="my-3 p-3 bg-white rounded shadow-sm">
                                <h6 class="border-bottom border-gray pb-2 mb-0">Your Reports</h6>
                                <div class="media text-muted pt-3"><!-- xmlns="#www.w3.org/2000/svg" -->
                                    <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32"  preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">@username</strong>
                                    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                    </p>
                                    <small>
                                    <a href="#"><p>Edit</p></a>
                                    <a href="#" data-toggle="modal"  data-target="#deleteModal" ><p>Delete</p></a>
                        
                                        <!-- Modal to Delete -->
                                        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Delete</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Are you sure you want to delete this?</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-danger">Delete</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <!-- End of Modal  -->
                                    </small>  
                                </div>
                                <div class="media text-muted pt-3"><!-- xmlns="#www.w3.org/2000/svg" -->
                                    <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
                                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">@username</strong>
                                    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                    </p>
                                    <small>
                                    <a href="#"><p>Edit</p></a>
                                    <a href="#" data-toggle="modal"  data-target="#deleteModal" ><p>Delete</p></a>
                        
                                        <!-- Modal to Delete -->
                                        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Delete</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Are you sure you want to delete this?</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-danger">Delete</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <!-- End of Modal  -->
                                    </small>  
                                </div>
                                <div class="media text-muted pt-3"><!-- xmlns="#www.w3.org/2000/svg" -->
                                    <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
                                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong class="d-block text-gray-dark">@username</strong>
                                    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                    </p>
                                    <small>
                                    <a href="#"><p>Edit</p></a>
                                    <a href="#" data-toggle="modal"  data-target="#deleteModal" ><p>Delete</p></a>
                        
                                        <!-- Modal to Delete -->
                                        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Delete</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Are you sure you want to delete this?</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-danger">Delete</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <!-- End of Modal  -->
                                    </small>  
                                </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <!-- End of Modal -->
                    <small class="d-block text-right mt-3">
                        <input type="button" class = "btn btn-danger" data-toggle="modal"  data-target="#myModal" value="Show all reports">
                    </small>
                </div>
                </div>
            </div>
            </section>

        <!-- </main>End #main -->



<!-- <%-include('./partials/adminFooter') %>  -->
    </div>
</template>

<script>
import adminnavbar from '../components/adminNavbar.vue'
// import adminsidebar from '../components/adminSidebar.vue'

export default {
    name: 'adminhome',
    components:{
        // 'adminSB': adminsidebar,
        'adminN': adminnavbar
    }
}
</script>