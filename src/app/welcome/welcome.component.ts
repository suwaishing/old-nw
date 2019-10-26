import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import "pagepiling.js";
declare var $: any;

@Component({
  selector: "welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  pagePilling() {
    $("#pagepiling").pagepiling({
      verticalCentered: false,
      css3: true,
      onLeave: function(index, nextIndex, direction) {
        let buttons = document.querySelectorAll(".btn");
        let sideNav = document.querySelector("#pp-nav");
        buttons.forEach(button => {
          button.addEventListener("click", () => {
            sideNav.remove();
          });
        });
        //fading out the txt of the leaving section
        $(".section")
          .eq(index - 1)
          .find("h1, p")
          .fadeOut(700, "easeInQuart");
        //fading in the text of the destination (in case it was fadedOut)
        $(".section")
          .eq(nextIndex - 1)
          .find("h1, p")
          .fadeIn(700, "easeInQuart");

        //reaching our last section? The one with our normal site?
        if (nextIndex == 3) {
          $("#arrow").fadeOut("slow");
          //fading out navigation bullets
          $("#pp-nav").fadeOut();
        }

        //leaving our last section? The one with our normal site?
        if (index == 3) {
          $("#arrow").fadeIn();

          //fadding in navigation bullets
          $("#pp-nav").fadeIn();
        }
      }
    });

    $("#arrow").click(function() {
      $.fn.pagepiling.moveSectionDown();
    });
  }
  ngOnInit() {
    this.pagePilling();
  }
}
