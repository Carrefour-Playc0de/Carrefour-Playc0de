import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilBibliotecasOrganizadores extends BasePage {

    readonly BIBLIOTECAS_ORGANIZADORES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BIBLIOTECAS_ORGANIZADORES = this.page.locator('//a [@id="menu-item-category-bibliotecas-organizadores"]')
    }

    async clickBazarTextilBibliotecasOrganizadores(): Promise<void> {
        await this.click(this.BIBLIOTECAS_ORGANIZADORES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilBibliotecasOrganizadores(): Promise<void> {
        await this.clickBazarTextilBibliotecasOrganizadores()
    }
}
