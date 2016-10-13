export class LineupComponent {
  static componentName: string = "tbLineup";

  static componentConfig: ng.IComponentOptions = {
    bindings: {},
    controller: LineupComponent,
    template: require('./lineup.component.html'),
  };

  public lineup = [
    {
      numberOfPeople: 2,
      partyName: 'smith'
    },
    {
      numberOfPeople: 2,
      partyName: 'smith'
    },
    {
      numberOfPeople: 2,
      partyName: 'smith'
    }
  ];

}