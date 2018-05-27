var loadFile = function(event) {
    var output = document.getElementById('file-img');
    output.src = URL.createObjectURL(event.target.files[0]);
  };

var click=0;
var tmp_home_data="";

  function home(){
    document.getElementById("container").innerHTML=tmp_home_data;
    click=0;
}

function addItem(){
    click++;
    if(click==1)
        tmp_home_data=document.getElementById("container").innerHTML;
    document.getElementById("container").innerHTML=`
        <div class="navigation-tab">
            <ul class="nav nav-tabs">
                <li><a onclick="home()">My Items</a></li>
                <li class="active"><a onclick="addItem()">Add Item</a></li>
                <li><a onclick="myOrder()">My Orders</a></li>
                <li><a onclick="profile()">Profile</a></li>
            </ul>
        </div>
        <div class="row additem">
                <form action="addItem" method="post" enctype=multipart/form-data>
                <div class="col-md-5" style="text-align:center; margin-top:5%;">
                        <div class="image-upload">
                            <label for="file-input">
                                <img id="file-img" src= {{ url_for('static', filename= 'images\plus.jpg') }} style="height:250px; width:300px; cursor:pointer"/>
                            </label>                            
                            <input id="file-input" name="file" type="file" onchange="loadFile(event)"/>
                        </div>
                </div>
                <div class="col-md-7 upload-cre">                    
                        <input type="text" name="itemName" placeholder="Item Name"><br>
                        <input type="text" name="itemCost" placeholder="Item Cost"><br><br>
                        <button class="btn btn-warning" type="submit" style="width:200px;">Submit</button>
                    </form>
                </div>
            </div>
    `;
}
// D:\python\UDS\static\images\plus.jpg