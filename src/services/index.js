import { httpClientWeb } from "../utils/conn-utils";

/**
 * Get Viagens
 *
 * @param {Object} paramns - query paramns
 * @param {Function} success - function on success
 * @param {Function} error - function on error
 * @return {Function} The getViagem promise
 */

export const getViagens = (params, sucess, error) =>
  httpClientWeb.get("/viagensop/", params, sucess, error);

/**
 * Get Viagens
 *
 * @param {Object} data - request body
 * @param {Function} success - function on success
 * @param {Function} error - function on error
 * @return {Function} The createViagem promise
 */

export const createViagem = (data, sucess, error) =>
  httpClientWeb.post("/viagens/", data, sucess, error);
