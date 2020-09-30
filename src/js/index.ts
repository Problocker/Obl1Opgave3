new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        tekst: "",
        uddata: "",
        bogstaver: "vælg"
    },
    methods: {
        Tekst: function () {
            console.log("Tekst" + this.tekst);
            this.uddata = this.tekst.toString();
            if (this.tekst == "") {
                this.uddata = "Ingen teskt i tekstfelt.";
            }
            else {
                console.log(this.bogstaver);
                switch (this.bogstaver) {
                    case "storeBogstaver":
                        console.log("StoreBogstaver");
                        this.uddata = this.uddata.toUpperCase();
                        break;
                    case "småBogstaver":
                        console.log("SmåBogstaver");
                        this.uddata = this.tekst.toLowerCase();
                        break;
                }
            }
        }
    }
});