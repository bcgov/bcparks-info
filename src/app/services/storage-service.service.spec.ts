import { StorageService } from './storage-service.service';


describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => { service = new StorageService(); });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});