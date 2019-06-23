// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

export const CONST = {
  BASE_MOBILECC: 'http://10.86.222.82:9001',
  BASE: 'http://10.86.222.82:9001'
}

export const DB_CONST = {
  user_table: 'user',
  img_daidien: 'hinhdaidien',
  name: 'DB',
  tables: [{
    name: 'user',
    columns: [
      { name: 'id', type: 'integer primary key autoincrement' },
      { name: 'userID', type: 'integer' },
      { name: 'name', type: 'VARCHAR' },
      { name: 'password', type: 'VARCHAR' }
    ]
  },
  {
    name: 'hinhdaidien',
    columns: [
      { name: 'id', type: 'integeqr primary key autoincrement' },
      { name: 'idx', type: 'integer' }
    ]
  }]
}


