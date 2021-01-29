# oh-chart-page - Chart Page

Visualize historical series

## Configuration


- `chartType` <small>TEXT</small> _Chart Type_

  Define a fixed period for the chart, aligned at the beginning of the period, e.g. January 1st at midnight for a year chart. If not set (or set to dynamic), the length of the period will be configurable but certain combinations like aggregated series might not work
  | Option | Label |
  |--------|-------|
  | `` | Dynamic period |
  | `day` | Day |
  | `isoWeek` | Week (starting on Monday) |
  | `week` | Week (starting on Sunday) |
  | `month` | Month |
  | `year` | Year |


- `period` <small>TEXT</small> _Initial Period_

  The initial period for the chart
  | Option | Label |
  |--------|-------|
  | `h` | h |
  | `2h` | 2h |
  | `4h` | 4h |
  | `12h` | 12h |
  | `D` | D |
  | `2D` | 2D |
  | `3D` | 3D |
  | `W` | W |
  | `2W` | 2W |
  | `M` | M |
  | `2M` | 2M |
  | `4M` | 4M |
  | `6M` | 6M |
  | `Y` | Y |



