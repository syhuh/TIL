/**
 * EasyHTTP Library
 * Library for making HTTP request
 * 
 * @version 3.0.0
 * @author SYHuh
 * @license MIT
 * 
 **/

class EasyHTTP {
  // Make an HTTP GET Request
  async get(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  // Make an HTTP Post Request
  async post(url, bodyData) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(bodyData)
    });
    const data = await res.json();
    return data;
  }

  // Make an HTTP PUT Request
  async put(url, bodyData) {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(bodyData)
    });
    const data = await res.json();
    return data;
  }

  // Make an HTTP DELETE Request
  async delete(url) {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = 'Resource Deleted...';
    return data;
  }
}

export const http = new EasyHTTP();