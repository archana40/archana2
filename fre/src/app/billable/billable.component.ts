import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Highcharts from 'highcharts';
import { BillableEmployeesService } from '../billable-employees.service';

@Component({
  selector: 'app-billable',
  templateUrl: './billable.component.html',
  styleUrls: ['./billable.component.css']
})

export class BillableComponent implements OnInit {
  count: any;

  highcharts = Highcharts;
  constructor(private billableEmployeesService: BillableEmployeesService) {
    this.getBillableEmployeesDetailsCount();
  }
  // chart1
    cart11 = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Technology Wise Billable Engineers',
        x: +20
      },
      tooltip: {
        pointFormat: '<b>{point.y}</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{

        colorByPoint: true,
        height: '200px',
        width: '300px',
        innerSize: '20%',
        data: [{
          name: 'Java FullStack',
          y: 25,
        //   events: {
        //     click() {
        //         window.location.href = '/billableTable';

        //     }
        // }
        }, {
          name: 'MEAN Stack',
          y: 10,
          // events: {
          //   click() {
          //       window.location.href = '/billableTable';

          //   }
          // }
        },
        {
          name: 'Dot Net',
          y: 20,
        //   events: {
        //     click() {
        //         window.location.href = '/billableTable';

        //     }
        // }
        }, {
          name: 'Data Science',
          y: 30,
        //   events: {
        //     click() {
        //         window.location.href = '/billableTable';

        //     }
        // }
        }]
      }]
};


// chart2
cart3 = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    text: 'Experience Wise  Billable Engineers',
    x: +15
  },
  tooltip: {
        pointFormat: '{series.data.year} {point.year}: {series.name}: <b>{point.y:.0f}</b>'
      },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        format: '<b>{point.year}</b> ({point.y:,.0f}) ',
        style: {
          fontWeight: 'bold',
          color: 'black'
        }
      },
      startAngle: -90,
      endAngle: 90,
      center: ['50%', '75%'],
      size: '150%'
    }
  },
  series: [{
    type: 'pie',
    name: 'Number of Employees',
    innerSize: '50%',
    data: [

      {
        year: '0 Years', y : 20,
        events : { click() {
          window.location.href = '/billableTable';
        }
      }
      },
      {
        year: '0-1 Years', y : 20,
        events : { click() {
          window.location.href = '/billableTable';
        }
      }
      },
      {
        year: '1-2 Years', y : 20,
        events : { click() {
          window.location.href = '/billableTable';
        }
      }
      },
      {
        year: '2-3 Years', y : 20,
        events : { click() {
          window.location.href = '/billableTable';
        }
      }
      },
      {
        year: '>3 Years', y : 20,
        events : { click() {
          window.location.href = '/billableTable';
        }
      }
      }
    ]
  }]
  };
  ngOnInit() {
  }


  getBillableEmployeesDetailsCount() {
  this.billableEmployeesService.getBillableEmployeesDetailsCount().subscribe(BillableEmployeesDetailsCount => {
    this.count = BillableEmployeesDetailsCount;
    console.log('inside construictor', this.count);
  }, err => {
    console.log(err);
  }, () => {
    console.log('count of billable employees');
  });
}
}
