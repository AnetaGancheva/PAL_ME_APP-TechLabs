import Navbar from '../components/Navbar';
//import styled from 'styled-components';
import React from 'react';
import '../stylingFormsAndSelectFields.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 

const Messages = () => {
    return(
        <>
        <Navbar />
        <div class="container">
            <div class="mail-box">
                <aside class="sm-side">
                    <div class="user-head">
                        <a class="inbox-avatar" href="javascript:;">
                            <img width="64" hieght="60" src="https://i.pravatar.cc/300" />
                        </a>
                        <div class="user-name">
                            <h5><a href="#">Username</a></h5>
                            <span><a href="#">username@palme.nl</a></span>
                        </div>
                        <a class="mail-dropdown pull-right" href="javascript:;">
                            <i class="fa fa-chevron-down"></i>
                        </a>
                    </div>
                <div class="inbox-body">
                    <a href="#myModal" data-toggle="modal" title="Compose" class="btn btn-compose"> Compose </a>
                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade" style={{display: 'none'}}>
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                    <h4 class="modal-title">Compose</h4>
                                </div>
                                <div class="modal-body">
                                    <form role="form" class="form-horizontal">
                                        <div class="form-group">
                                            <label class="col-lg-2 control-label">To</label>
                                            <div class="col-lg-10">
                                            <input type="text" placeholder="" id="inputEmail1" class="form-control" />
                                        </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-2 control-label">Cc / Bcc</label>
                    <div class="col-lg-10">
                      <input type="text" placeholder="" id="cc" class="form-control"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-lg-2 control-label">Subject</label>
                    <div class="col-lg-10">
                      <input type="text" placeholder="" id="inputPassword1" class="form-control"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-lg-2 control-label">Message</label>
                    <div class="col-lg-10">
                      <textarea rows="10" cols="30" class="form-control" id="" name=""></textarea>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-lg-offset-2 col-lg-10">
                      <span class="btn green fileinput-button">
                                                        <i class="fa fa-plus fa fa-white"></i>
                                                        <span>Attachment</span>
                      <input type="file" name="files[]" multiple=""/>
                      </span>
                      <button class="btn btn-send" type="submit">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="inbox-nav inbox-divider">
        <li class="active">
          <a href="#"><i class="fa fa-inbox"></i> Inbox <span class="label label-danger pull-right">2</span></a>

        </li>
        <li>
          <a href="#"><i class="fa fa-envelope-o"></i> Sent Mail</a>
        </li>
        <li>
          <a href="#"><i class="fa fa-bookmark-o"></i> Important</a>
        </li>
        <li>
          <a href="#"><i class=" fa fa-external-link"></i> Drafts <span class="label label-info pull-right">30</span></a>
        </li>
        <li>
          <a href="#"><i class=" fa fa-trash-o"></i> Trash</a>
        </li>
      </ul>
      <ul class="nav nav-pills nav-stacked labels-info inbox-divider">
        <li>
          <h4>Labels</h4> </li>
        <li>
          <a href="#"> <i class=" fa fa-sign-blank text-danger"></i> Football </a>
        </li>
        <li>
          <a href="#"> <i class=" fa fa-sign-blank text-success"></i> Yoga </a>
        </li>
        <li>
          <a href="#"> <i class=" fa fa-sign-blank text-info "></i> Basketball </a>
        </li>
        <li>
          <a href="#"> <i class=" fa fa-sign-blank text-warning "></i> Friends </a>
        </li>
        <li>
          <a href="#"> <i class=" fa fa-sign-blank text-primary "></i> Others </a>
        </li>
      </ul>
      <ul class="nav nav-pills nav-stacked labels-info ">
        <li>
          <h4>palMe Buddy online</h4> </li>
        <li>
          <a href="#"> <i class=" fa fa-circle text-success"></i>John Doe
            <p>Yes sure I get</p>
          </a>
        </li>
        <li>
          <a href="#"> <i class=" fa fa-circle text-danger"></i>Jane Doe
            <p>Busy with training</p>
          </a>
        </li>
        <li>
          <a href="#"> <i class=" fa fa-circle text-muted "></i>Best Friend
            <p>Wanna meet up?</p>
          </a>
        </li>
        <li>
          <a href="#"> <i class=" fa fa-circle text-muted "></i>Someone Else
            <p>I am not there</p>
          </a>
        </li>
        <li>
          <a href="#"> <i class=" fa fa-circle text-muted "></i>Family Member
            <p>I am okay, thank</p>
          </a>
        </li>
      </ul>

      <div class="inbox-body text-center">
        <div class="btn-group">
          <a class="btn mini btn-primary" href="javascript:;">
            <i class="fa fa-plus"></i>
          </a>
        </div>
        <div class="btn-group">
          <a class="btn mini btn-success" href="javascript:;">
            <i class="fa fa-phone"></i>
          </a>
        </div>
        <div class="btn-group">
          <a class="btn mini btn-info" href="javascript:;">
            <i class="fa fa-cog"></i>
          </a>
        </div>
      </div>

    </aside>
    <aside class="lg-side">
      <div class="inbox-head">
        <h3>Inbox</h3>
        <form action="#" class="pull-right position">
          <div class="input-append">
            <input type="text" class="sr-input" placeholder="Search Mail" />
            <button class="btn sr-btn" type="button"><i class="fa fa-search"></i></button>
          </div>
        </form>
      </div>
      <div class="inbox-body">
        <div class="mail-option">
          <div class="chk-all">
            <input type="checkbox" class="mail-checkbox mail-group-checkbox" />
            <div class="btn-group">
              <a data-toggle="dropdown" href="#" class="btn mini all" aria-expanded="false">
                                         All
                                         <i class="fa fa-angle-down "></i>
                                     </a>
              <ul class="dropdown-menu">
                <li><a href="#"> None</a></li>
                <li><a href="#"> Read</a></li>
                <li><a href="#"> Unread</a></li>
              </ul>
            </div>
          </div>

          <div class="btn-group">
            <a data-original-title="Refresh" data-placement="top" data-toggle="dropdown" href="#" class="btn mini tooltips">
              <i class=" fa fa-refresh"></i>
            </a>
          </div>
          <div class="btn-group hidden-phone">
            <a data-toggle="dropdown" href="#" class="btn mini blue" aria-expanded="false">
                                     More
                                     <i class="fa fa-angle-down "></i>
                                 </a>
            <ul class="dropdown-menu">
              <li><a href="#"><i class="fa fa-pencil"></i> Mark as Read</a></li>
              <li><a href="#"><i class="fa fa-ban"></i> Spam</a></li>
              <li class="divider"></li>
              <li><a href="#"><i class="fa fa-trash-o"></i> Delete</a></li>
            </ul>
          </div>
          <div class="btn-group">
            <a data-toggle="dropdown" href="#" class="btn mini blue">
                                     Move to
                                     <i class="fa fa-angle-down "></i>
                                 </a>
            <ul class="dropdown-menu">
              <li><a href="#"><i class="fa fa-pencil"></i> Mark as Read</a></li>
              <li><a href="#"><i class="fa fa-ban"></i> Spam</a></li>
              <li class="divider"></li>
              <li><a href="#"><i class="fa fa-trash-o"></i> Delete</a></li>
            </ul>
          </div>

          <ul class="unstyled inbox-pagination">
            <li><span>1-4 of 4</span></li>
            <li>
              <a class="np-btn" href="#"><i class="fa fa-angle-left  pagination-left"></i></a>
            </li>
            <li>
              <a class="np-btn" href="#"><i class="fa fa-angle-right pagination-right"></i></a>
            </li>
          </ul>
        </div>
        <table class="table table-inbox table-hover">
          <tbody>
            <tr class="unread">
              <td class="inbox-small-cells">
                <input type="checkbox" class="mail-checkbox" />
              </td>
              <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
              <td class="view-message  dont-show">Yoga Class</td>
              <td class="view-message ">Added a new class, sign up now!</td>
              <td class="view-message  inbox-small-cells"><i class="fa fa-paperclip"></i></td>
              <td class="view-message  text-right">9:27 AM</td>
            </tr>
            <tr class="unread">
              <td class="inbox-small-cells">
                <input type="checkbox" class="mail-checkbox"/>
              </td>
              <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
              <td class="view-message dont-show">Google Webmaster </td>
              <td class="view-message">Improve the search presence of WebSite</td>
              <td class="view-message inbox-small-cells"></td>
              <td class="view-message text-right">March 15</td>
            </tr>
            <tr class="">
              <td class="inbox-small-cells">
                <input type="checkbox" class="mail-checkbox"/>
              </td>
              <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
              <td class="view-message dont-show">JW Player</td>
              <td class="view-message">Last Chance: Upgrade to Pro for </td>
              <td class="view-message inbox-small-cells"></td>
              <td class="view-message text-right">March 15</td>
            </tr>
            <tr class="">
              <td class="inbox-small-cells">
                <input type="checkbox" class="mail-checkbox"/>
              </td>
              <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
              <td class="view-message dont-show">Tim Reid, S P N</td>
              <td class="view-message">Boost Your Website Traffic</td>
              <td class="view-message inbox-small-cells"></td>
              <td class="view-message text-right">April 01</td>
            </tr>
          </tbody>
        </table>
      </div>
    </aside>
  </div>
</div>
</>
    )
}
export default Messages