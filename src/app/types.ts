export enum ChartTypeEnum {
  line = 'LINE_SERIES',
  range = 'RANGE_SERIES',
  circularGauge = 'CIRCULAR_GAUGE',
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
  id?: number;
  name: string;
  chartType: ChartType | undefined;
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
}

export class Layout {
  name: string;
  components: any;
}

export class ChartType {
  id?: number;
  name: string;
  size: string;
  chartIdent?: string;
  key: string;
}

export class TargetSat {
  target: any;
  time: Date;
  assets: []
}
