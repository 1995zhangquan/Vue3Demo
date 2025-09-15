<style scoped>

</style>

<template>

	<div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">

		<Top></Top>
		<Left></Left>
		<div class="page-wrapper" style="display: block;">
			<!--这里是导航-->
			<div class="page-breadcrumb">
				<div class="row">
					<div class="col-7 align-self-center">
						<h4 class="page-title text-truncate text-dark font-weight-medium mb-1">Basic Initialisation</h4>
						<div class="d-flex align-items-center">
							<nav aria-label="breadcrumb">
								<ol class="breadcrumb m-0 p-0">
									<li class="breadcrumb-item"><a href="index.html" class="text-muted">Home</a></li>
									<li class="breadcrumb-item text-muted active" aria-current="page">Library</li>
								</ol>
							</nav>
						</div>
					</div>
					<div class="col-5 align-self-center">
						<div class="customize-input float-right">
							<select class="custom-select custom-select-set form-control bg-white border-0 custom-shadow custom-radius">
								<option selected="">Aug 19</option>
								<option value="1">July 19</option>
								<option value="2">Jun 19</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<!--导航结束-->
			<div class="container-fluid">
				<div class="row">
					<div class="col-12">
						<div class="card">
							<div class="card-body">
								<h4 class="card-title">Zero Configuration</h4>
								<h6 class="card-subtitle">DataTables has most features enabled by default, so all you
									need to do to use it with your own tables is to call the construction
									function:<code> $().DataTable();</code>. You can refer full documentation from here
									<a href="https://datatables.net/">Datatables</a></h6>
								<div class="table-responsive">
									<div id="zero_config_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="zero_config_length"><label>Show <select name="zero_config_length" aria-controls="zero_config" class="form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div class="col-sm-12 col-md-6"><div id="zero_config_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="zero_config"></label></div></div></div><div class="row"><div class="col-sm-12"><table id="zero_config" class="table table-striped table-bordered no-wrap dataTable" role="grid" aria-describedby="zero_config_info">
										<thead>
										<tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="zero_config" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style="width: 0px;">Name</th><th class="sorting" tabindex="0" aria-controls="zero_config" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style="width: 0px;">Position</th><th class="sorting" tabindex="0" aria-controls="zero_config" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending" style="width: 0px;">Office</th><th class="sorting" tabindex="0" aria-controls="zero_config" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending" style="width: 0px;">Age</th><th class="sorting" tabindex="0" aria-controls="zero_config" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending" style="width: 0px;">Start date</th><th class="sorting" tabindex="0" aria-controls="zero_config" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 0px;">Salary</th></tr>
										</thead>
										<tbody>

























































										<tr role="row" class="odd">
											<td class="sorting_1">Airi Satou</td>
											<td>Accountant</td>
											<td>Tokyo</td>
											<td>33</td>
											<td>2008/11/28</td>
											<td>$162,700</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1">Angelica Ramos</td>
											<td>Chief Executive Officer (CEO)</td>
											<td>London</td>
											<td>47</td>
											<td>2009/10/09</td>
											<td>$1,200,000</td>
										</tr><tr role="row" class="odd">
											<td class="sorting_1">Ashton Cox</td>
											<td>Junior Technical Author</td>
											<td>San Francisco</td>
											<td>66</td>
											<td>2009/01/12</td>
											<td>$86,000</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1">Bradley Greer</td>
											<td>Software Engineer</td>
											<td>London</td>
											<td>41</td>
											<td>2012/10/13</td>
											<td>$132,000</td>
										</tr><tr role="row" class="odd">
											<td class="sorting_1">Brenden Wagner</td>
											<td>Software Engineer</td>
											<td>San Francisco</td>
											<td>28</td>
											<td>2011/06/07</td>
											<td>$206,850</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1">Brielle Williamson</td>
											<td>Integration Specialist</td>
											<td>New York</td>
											<td>61</td>
											<td>2012/12/02</td>
											<td>$372,000</td>
										</tr><tr role="row" class="odd">
											<td class="sorting_1">Bruno Nash</td>
											<td>Software Engineer</td>
											<td>London</td>
											<td>38</td>
											<td>2011/05/03</td>
											<td>$163,500</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1">Caesar Vance</td>
											<td>Pre-Sales Support</td>
											<td>New York</td>
											<td>21</td>
											<td>2011/12/12</td>
											<td>$106,450</td>
										</tr><tr role="row" class="odd">
											<td class="sorting_1">Cara Stevens</td>
											<td>Sales Assistant</td>
											<td>New York</td>
											<td>46</td>
											<td>2011/12/06</td>
											<td>$145,600</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1">Cedric Kelly</td>
											<td>Senior Javascript Developer</td>
											<td>Edinburgh</td>
											<td>22</td>
											<td>2012/03/29</td>
											<td>$433,060</td>
										</tr></tbody>
										<tfoot>
										<tr><th rowspan="1" colspan="1">Name</th><th rowspan="1" colspan="1">Position</th><th rowspan="1" colspan="1">Office</th><th rowspan="1" colspan="1">Age</th><th rowspan="1" colspan="1">Start date</th><th rowspan="1" colspan="1">Salary</th></tr>
										</tfoot>
									</table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="zero_config_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="zero_config_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="zero_config_previous"><a href="#" aria-controls="zero_config" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="zero_config" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="#" aria-controls="zero_config" data-dt-idx="2" tabindex="0" class="page-link">2</a></li><li class="paginate_button page-item "><a href="#" aria-controls="zero_config" data-dt-idx="3" tabindex="0" class="page-link">3</a></li><li class="paginate_button page-item "><a href="#" aria-controls="zero_config" data-dt-idx="4" tabindex="0" class="page-link">4</a></li><li class="paginate_button page-item "><a href="#" aria-controls="zero_config" data-dt-idx="5" tabindex="0" class="page-link">5</a></li><li class="paginate_button page-item "><a href="#" aria-controls="zero_config" data-dt-idx="6" tabindex="0" class="page-link">6</a></li><li class="paginate_button page-item next" id="zero_config_next"><a href="#" aria-controls="zero_config" data-dt-idx="7" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<div class="card">
							<div class="card-body">
								<h4 class="card-title">Default Ordering</h4>
								<h6 class="card-subtitle">With DataTables you can alter the ordering characteristics of
									the table at initialisation time. Using the<code> order | option</code> order
									initialisation parameter, you can set the table to display the data in exactly the
									order that you want.</h6>
								<div class="table-responsive">
									<div id="default_order_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="default_order_length"><label>Show <select name="default_order_length" aria-controls="default_order" class="form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div class="col-sm-12 col-md-6"><div id="default_order_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="default_order"></label></div></div></div><div class="row"><div class="col-sm-12"><table id="default_order" class="table table-striped table-bordered display no-wrap dataTable" style="width: 100%;" role="grid" aria-describedby="default_order_info">
										<thead>
										<tr role="row"><th class="sorting" tabindex="0" aria-controls="default_order" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style="width: 259px;">Name</th><th class="sorting" tabindex="0" aria-controls="default_order" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style="width: 371px;">Position</th><th class="sorting" tabindex="0" aria-controls="default_order" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending" style="width: 195px;">Office</th><th class="sorting_desc" tabindex="0" aria-controls="default_order" rowspan="1" colspan="1" aria-sort="descending" aria-label="Age: activate to sort column ascending" style="width: 89px;">Age</th><th class="sorting" tabindex="0" aria-controls="default_order" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending" style="width: 174px;">Start date</th><th class="sorting" tabindex="0" aria-controls="default_order" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 158px;">Salary</th></tr>
										</thead>
										<tbody>

























































										<tr role="row" class="odd">
											<td>Ashton Cox</td>
											<td>Junior Technical Author</td>
											<td>San Francisco</td>
											<td class="sorting_1">66</td>
											<td>2009/01/12</td>
											<td>$86,000</td>
										</tr><tr role="row" class="even">
											<td>Michael Silva</td>
											<td>Marketing Designer</td>
											<td>London</td>
											<td class="sorting_1">66</td>
											<td>2012/11/27</td>
											<td>$198,500</td>
										</tr><tr role="row" class="odd">
											<td>Jackson Bradshaw</td>
											<td>Director</td>
											<td>New York</td>
											<td class="sorting_1">65</td>
											<td>2008/09/26</td>
											<td>$645,750</td>
										</tr><tr role="row" class="even">
											<td>Paul Byrd</td>
											<td>Chief Financial Officer (CFO)</td>
											<td>New York</td>
											<td class="sorting_1">64</td>
											<td>2010/06/09</td>
											<td>$725,000</td>
										</tr><tr role="row" class="odd">
											<td>Olivia Liang</td>
											<td>Support Engineer</td>
											<td>Singapore</td>
											<td class="sorting_1">64</td>
											<td>2011/02/03</td>
											<td>$234,500</td>
										</tr><tr role="row" class="even">
											<td>Serge Baldwin</td>
											<td>Data Coordinator</td>
											<td>Singapore</td>
											<td class="sorting_1">64</td>
											<td>2012/04/09</td>
											<td>$138,575</td>
										</tr><tr role="row" class="odd">
											<td>Garrett Winters</td>
											<td>Accountant</td>
											<td>Tokyo</td>
											<td class="sorting_1">63</td>
											<td>2011/07/25</td>
											<td>$170,750</td>
										</tr><tr role="row" class="even">
											<td>Zenaida Frank</td>
											<td>Software Engineer</td>
											<td>New York</td>
											<td class="sorting_1">63</td>
											<td>2010/01/04</td>
											<td>$125,250</td>
										</tr><tr role="row" class="odd">
											<td>Vivian Harrell</td>
											<td>Financial Controller</td>
											<td>San Francisco</td>
											<td class="sorting_1">62</td>
											<td>2009/02/14</td>
											<td>$452,500</td>
										</tr><tr role="row" class="even">
											<td>Tiger Nixon</td>
											<td>System Architect</td>
											<td>Edinburgh</td>
											<td class="sorting_1">61</td>
											<td>2011/04/25</td>
											<td>$320,800</td>
										</tr></tbody>
										<tfoot>
										<tr><th rowspan="1" colspan="1">Name</th><th rowspan="1" colspan="1">Position</th><th rowspan="1" colspan="1">Office</th><th rowspan="1" colspan="1">Age</th><th rowspan="1" colspan="1">Start date</th><th rowspan="1" colspan="1">Salary</th></tr>
										</tfoot>
									</table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="default_order_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="default_order_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="default_order_previous"><a href="#" aria-controls="default_order" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="default_order" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="#" aria-controls="default_order" data-dt-idx="2" tabindex="0" class="page-link">2</a></li><li class="paginate_button page-item "><a href="#" aria-controls="default_order" data-dt-idx="3" tabindex="0" class="page-link">3</a></li><li class="paginate_button page-item "><a href="#" aria-controls="default_order" data-dt-idx="4" tabindex="0" class="page-link">4</a></li><li class="paginate_button page-item "><a href="#" aria-controls="default_order" data-dt-idx="5" tabindex="0" class="page-link">5</a></li><li class="paginate_button page-item "><a href="#" aria-controls="default_order" data-dt-idx="6" tabindex="0" class="page-link">6</a></li><li class="paginate_button page-item next" id="default_order_next"><a href="#" aria-controls="default_order" data-dt-idx="7" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<div class="card">
							<div class="card-body">
								<h4 class="card-title">Multi-column ordering</h4>
								<h6 class="card-subtitle">On a per-column basis (i.e. order by a specific column and
									then a secondary column if the data in the first column is identical), through the
									<code> columns.orderData</code> option.</h6>
								<div class="table-responsive">
									<div id="multi_col_order_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="multi_col_order_length"><label>Show <select name="multi_col_order_length" aria-controls="multi_col_order" class="form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div class="col-sm-12 col-md-6"><div id="multi_col_order_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="multi_col_order"></label></div></div></div><div class="row"><div class="col-sm-12"><table id="multi_col_order" class="table table-striped table-bordered display no-wrap dataTable no-footer" style="width: 100%;" role="grid" aria-describedby="multi_col_order_info">
										<thead>
										<tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="multi_col_order" rowspan="1" colspan="1" aria-sort="ascending" aria-label="First name: activate to sort column descending" style="width: 217px;">First name</th><th class="sorting" tabindex="0" aria-controls="multi_col_order" rowspan="1" colspan="1" aria-label="Last name: activate to sort column ascending" style="width: 212px;">Last name</th><th class="sorting" tabindex="0" aria-controls="multi_col_order" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style="width: 438px;">Position</th><th class="sorting" tabindex="0" aria-controls="multi_col_order" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending" style="width: 233px;">Office</th><th class="sorting" tabindex="0" aria-controls="multi_col_order" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 191px;">Salary</th></tr>
										</thead>
										<tbody>

























































										<tr role="row" class="odd">
											<td class="sorting_1 sorting_2">Airi</td>
											<td>Satou</td>
											<td>Accountant</td>
											<td>Tokyo</td>
											<td>$162,700</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1 sorting_2">Angelica</td>
											<td>Ramos</td>
											<td>Chief Executive Officer (CEO)</td>
											<td>London</td>
											<td>$1,200,000</td>
										</tr><tr role="row" class="odd">
											<td class="sorting_1 sorting_2">Ashton</td>
											<td>Cox</td>
											<td>Junior Technical Author</td>
											<td>San Francisco</td>
											<td>$86,000</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1 sorting_2">Bradley</td>
											<td>Greer</td>
											<td>Software Engineer</td>
											<td>London</td>
											<td>$132,000</td>
										</tr><tr role="row" class="odd">
											<td class="sorting_1 sorting_2">Brenden</td>
											<td>Wagner</td>
											<td>Software Engineer</td>
											<td>San Francisco</td>
											<td>$206,850</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1 sorting_2">Brielle</td>
											<td>Williamson</td>
											<td>Integration Specialist</td>
											<td>New York</td>
											<td>$372,000</td>
										</tr><tr role="row" class="odd">
											<td class="sorting_1 sorting_2">Bruno</td>
											<td>Nash</td>
											<td>Software Engineer</td>
											<td>London</td>
											<td>$163,500</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1 sorting_2">Caesar</td>
											<td>Vance</td>
											<td>Pre-Sales Support</td>
											<td>New York</td>
											<td>$106,450</td>
										</tr><tr role="row" class="odd">
											<td class="sorting_1 sorting_2">Cara</td>
											<td>Stevens</td>
											<td>Sales Assistant</td>
											<td>New York</td>
											<td>$145,600</td>
										</tr><tr role="row" class="even">
											<td class="sorting_1 sorting_2">Cedric</td>
											<td>Kelly</td>
											<td>Senior Javascript Developer</td>
											<td>Edinburgh</td>
											<td>$433,060</td>
										</tr></tbody>
									</table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="multi_col_order_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="multi_col_order_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="multi_col_order_previous"><a href="#" aria-controls="multi_col_order" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="multi_col_order" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="#" aria-controls="multi_col_order" data-dt-idx="2" tabindex="0" class="page-link">2</a></li><li class="paginate_button page-item "><a href="#" aria-controls="multi_col_order" data-dt-idx="3" tabindex="0" class="page-link">3</a></li><li class="paginate_button page-item "><a href="#" aria-controls="multi_col_order" data-dt-idx="4" tabindex="0" class="page-link">4</a></li><li class="paginate_button page-item "><a href="#" aria-controls="multi_col_order" data-dt-idx="5" tabindex="0" class="page-link">5</a></li><li class="paginate_button page-item "><a href="#" aria-controls="multi_col_order" data-dt-idx="6" tabindex="0" class="page-link">6</a></li><li class="paginate_button page-item next" id="multi_col_order_next"><a href="#" aria-controls="multi_col_order" data-dt-idx="7" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer></Footer>
		</div>
	</div>
</template>


<script setup>
import Top from "@/components/Top.vue";
import Left from "@/views/Left.vue";
import Footer from "@/components/Footer.vue";
</script>