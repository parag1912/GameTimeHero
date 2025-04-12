export type RsvpStatus = 'Yes' | 'No' | 'Maybe';

export interface Player {
  id: string;
  name: string;
}

export interface RsvpEntry {
  player: Player;
  status: RsvpStatus;
}

export interface Logger {
  log(message: string): void;
}

export class RsvpService {
  private rsvpMap: Map<string, RsvpEntry>;

  constructor(private logger: Logger) {
    this.rsvpMap = new Map();
  }

  addOrUpdateRsvp(entry: RsvpEntry): void {
    const exists = this.rsvpMap.has(entry.player.id);
    this.rsvpMap.set(entry.player.id, entry);
    const action = exists ? 'Updated' : 'Added';
    this.logger.log(`${action} RSVP: ${entry.player.name} - ${entry.status}`);
  }

  getConfirmedAttendees(): Player[] {
    return Array.from(this.rsvpMap.values())
      .filter(entry => entry.status === 'Yes')
      .map(entry => entry.player);
  }

  getRsvpCounts(): {
    total: number;
    confirmed: number;
    declined: number;
    maybe: number;
  } {
    let confirmed = 0, declined = 0, maybe = 0;

    for (const entry of this.rsvpMap.values()) {
      if (entry.status === 'Yes') confirmed++;
      else if (entry.status === 'No') declined++;
      else maybe++;
    }

    return {
      total: this.rsvpMap.size,
      confirmed,
      declined,
      maybe
    };
  }

  getRsvpStatus(playerId: string): RsvpStatus | null {
    return this.rsvpMap.get(playerId)?.status || null;
  }
}