import { RsvpService, RsvpEntry, Player } from './RsvpService';
import { ConsoleLogger } from './ConsoleLogger';

const logger = new ConsoleLogger();
const service = new RsvpService(logger);

const players: Player[] = [
  { id: 'p1', name: 'Alice' },
  { id: 'p2', name: 'Bob' },
  { id: 'p3', name: 'Charlie' }
];

service.addOrUpdateRsvp({ player: players[0], status: 'Yes' });
service.addOrUpdateRsvp({ player: players[1], status: 'No' });
service.addOrUpdateRsvp({ player: players[2], status: 'Maybe' });
service.addOrUpdateRsvp({ player: players[2], status: 'Yes' });

console.log('✅ Confirmed Attendees:', service.getConfirmedAttendees());
console.log('📊 RSVP Counts:', service.getRsvpCounts());