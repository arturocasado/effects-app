import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/ususario.model';

export const cargarUsuarios = createAction('[Usuarios] Cargar Usuarios');

export const cargarUsuariosSuccess = createAction(
    '[Usuarios] Cargar Usuarios success',
    props<{ usuarios: Usuario[] }>()
);
export const cargarUsuariosError = createAction(
    '[Usuarios] Cargar Usuarios error',
    props<{ payload: any }>()
);
