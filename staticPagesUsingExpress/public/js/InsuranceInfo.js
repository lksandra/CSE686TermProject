function PoliciesList(){
    var p1 = new CreatePolicy("Policy Name 1", "");
    var p2 = new CreatePolicy("Policy Name 2", "");
    var p3 = new CreatePolicy("Policy Name 3", "");
    this.policyarray = [p1,p2 ,p3];
};

function CreatePolicy(policyname,descrip){
    descrip =  "Medicare Advantage and Drug plans bundle the benefits of a Medicare Advantage plan with Prescription Drug coverage. Your plan would include medical and prescription drug coverage.";
    this.policy = {"name": policyname, "description": descrip};
};

function getPolicyDescription(){
    console.log("getPolicyDescription triggered");
    var policylist = new PoliciesList().policyarray;
    console.log(policylist.length);
    var val = document.getElementById("ip").value;
    console.log("value selected:", val);
    for(var i=0; i<policylist.length; i++){
        console.log(policylist[i]);
        console.log(policylist[i].policy.name, policylist[i].policy.description);
        if(policylist[i].policy.name==val){
            console.log("if loop triggered");
            var parent = document.getElementById("pd");
            console.log("parent:", parent);
            var node = document.createElement("h3");
            var poldescrip = document.createTextNode("Policy Description:");
            node.appendChild(poldescrip);
            var node2 = document.createElement("h4");
            var descrip = document.createTextNode(policylist[i].policy.description);

           // var description = `<h2>${policylist[i].description}</h2>`;
           node2.appendChild(descrip);
           parent.appendChild(node);
           parent.appendChild(node2);
            break;
        };
    };

};