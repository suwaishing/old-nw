import { Component, OnInit } from "@angular/core";
import { Angulartics2GoogleAnalytics } from "angulartics2/ga";
import {
  transition,
  trigger,
  query,
  style,
  animate
} from "@angular/animations";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("myAnimation", [
      transition("* => *", [
        // Set a default  style for enter and leave
        query(
          ":enter, :leave",
          [
            style({
              position: "absolute",
              left: 0,
              top: "50%",
              width: "100%",
              height: "2vh",
              opacity: 0,
              transform: "scale(0)"
            })
          ],
          { optional: true }
        ),
        // Animate the new page in
        query(
          ":enter",
          [
            animate(
              "600ms ease",
              style({
                opacity: 1,
                transform: "scale(1)",
                top: "0%",
                height: "100vh"
              })
            )
          ],
          { optional: true }
        )
      ])
    ])
  ] // register the animations
})
export class AppComponent implements OnInit {
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    angulartics2GoogleAnalytics.startTracking();
  }

  isSvgHide = false;
  svgHide() {
    let svgDiv = document.querySelector(".svg-div");
    let timeOut = setTimeout(() => {
      svgDiv.remove();
      this.isSvgHide = true;
    }, 2600);
    return timeOut;
  }
  ngOnInit() {
    // setTimeout(() => (this.isSvgHide = true), 2600);
    this.svgHide();
  }
  prepareOutlet(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
}
