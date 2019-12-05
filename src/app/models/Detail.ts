export interface Detail {
  date: Date;
  userAction: string;
  range: 'success' | 'warning' | 'danger';
  trending: 'trending-up' | 'trending-down' | 'arrow-round-down';
}
