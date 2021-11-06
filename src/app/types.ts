export enum ChartTypeEnum {
  line = 'LINE_SERIES',
  range = 'RANGE_SERIES',
  circularGauge = 'CIRCULAR_GAUGE',
  pie = 'PIE_CHART',
  doughnut = 'DOUGHNUT_SERIES',
  bar = 'BAR_GAUGE'
}

export enum LocationType {
  point = 'POINT',
  line = 'LINE',
  polygon = 'POLYGON'
}

export enum AlertType {
  gt = 'GT',
  lwr = 'LWR',
  eq = 'EQ',
  neq = 'NEQ'
}

export class DashboardCollection {
  name: string;
  dashboards: Dashboard[];
}

export class Team {
  name: string;
  members: any[];
}

export class Metric {
  name: string;
  limits: any;
}

export class Alert {
  accounts: any;
  target: Target;
  metric: Metric[];
  value: number;
  type: AlertType;
}

export class Dashboard {
  id?: number;
  team: Team;
  layout: Layout;
  name: string;
  charts: Chart[];
}

export class Chart {
  name: string;
  chartType: ChartTypeEnum;
  target: Target;
  params: any;
}

export class Target {
  name: string;
  location: Location;
  metrics: Metric[];
}

export class Location {
  name: string;
  type: LocationType;
  points: LocationPoint[];
}

export class LocationPoint {
  latitude: string;
  longitude: string;
  height: string;
}

export class Layout {
  name: string;
  components: any;
}

export class ChartType {
  name: string;
  size: string;
  chartIdent: string;
  key: string;
}
