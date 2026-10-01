import { test, expect, vi } from 'vitest';
import { fetchData } from './api';

vi.mock('./api');   // Vitest lo eleva (hoisting) al inicio del archivo

test('maneja la carga de datos', async () => {
  fetchData.mockResolvedValue({ id: 1, name: 'Test' });
  // ... resto del test
});