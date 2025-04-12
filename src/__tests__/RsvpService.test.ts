import { RsvpService, Player, RsvpEntry } from '../RsvpService';

class MockLogger {
  logs: string[] = [];
  log(message: string): void {
    this.logs.push(message);
  }
}

const samplePlayers: Player[] = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' }
];

describe('RsvpService', () => {
  let service: RsvpService;
  let logger: MockLogger;

  beforeEach(() => {
    logger = new MockLogger();
    service = new RsvpService(logger);
  });

  test('should add and update RSVP entries correctly', () => {
    const entry: RsvpEntry = { player: samplePlayers[0], status: 'Yes' };
    service.addOrUpdateRsvp(entry);
    expect(service.getRsvpStatus(entry.player.id)).toBe('Yes');
    expect(logger.logs).toContain('Added RSVP: Alice - Yes');

    service.addOrUpdateRsvp({ player: samplePlayers[0], status: 'No' });
    expect(service.getRsvpStatus(entry.player.id)).toBe('No');
    expect(logger.logs).toContain('Updated RSVP: Alice - No');
  });

  test('should return correct confirmed attendees', () => {
    service.addOrUpdateRsvp({ player: samplePlayers[0], status: 'Yes' });
    service.addOrUpdateRsvp({ player: samplePlayers[1], status: 'No' });

    const confirmed = service.getConfirmedAttendees();
    expect(confirmed).toEqual([samplePlayers[0]]);
  });

  test('should return correct RSVP counts', () => {
    service.addOrUpdateRsvp({ player: samplePlayers[0], status: 'Yes' });
    service.addOrUpdateRsvp({ player: samplePlayers[1], status: 'Maybe' });
    service.addOrUpdateRsvp({ player: samplePlayers[2], status: 'No' });

    const counts = service.getRsvpCounts();
    expect(counts).toEqual({
      total: 3,
      confirmed: 1,
      declined: 1,
      maybe: 1
    });
  });

  test('should return null for unknown player status', () => {
    expect(service.getRsvpStatus('unknown')).toBeNull();
  });
});