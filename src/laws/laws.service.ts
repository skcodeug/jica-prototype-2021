import { Injectable } from '@nestjs/common';

@Injectable()
export class LawsService {
  displayLaws(): string {
    return 'A listing of Laws categorized by domain & subject';
  }

  displayLaw(id: number): string {
    return `A listing of one Law by ID: ${id} `;
  }

  deleteLaws(id: number): string {
    return `Law by ID: ${id} has been deleted.`;
  }
}
