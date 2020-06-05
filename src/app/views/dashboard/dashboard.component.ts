import { Component, OnInit } from "@angular/core";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import sdk from "@stackblitz/sdk";
import * as aws from "aws-sdk";

// window['openGithubProject'] = () => {
//   sdk.openGithubProject('gothinkster/angular-realworld-example-app');
// }

window["embedGithubProject"] = () => {
  sdk.embedGithubProject("myDiv", "ronak34/angular-click-counter", {
    height: 800,
  });
};

@Component({
  templateUrl: "dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  cloud9IDE: boolean = false;

  ngOnInit(): void {}

  embedCloud9() {
    this.cloud9IDE = !this.cloud9IDE;
  }
}
