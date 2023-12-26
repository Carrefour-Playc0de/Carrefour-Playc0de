import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenConservasFrutas extends BasePage {

    readonly CONSERVAS_FRUTAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CONSERVAS_FRUTAS = this.page.locator('//a [@id="menu-item-category-conservas-frutas"]')
    }

    async clickAlmacenConservasFrutas(): Promise<void> {
        await this.click(this.CONSERVAS_FRUTAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenConservasFrutas(): Promise<void> {
        await this.clickAlmacenConservasFrutas()
    }
}