import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: any[], searchTerm: string): any[] {
    if (!users || !searchTerm) {
      return users;
    }

    // Convert the search term to a number since IDs are numeric
    const searchId = Number(searchTerm);

    // Return filtered users if searchId is a valid number
    return users.filter(user => user.id === searchId);
  }

}
