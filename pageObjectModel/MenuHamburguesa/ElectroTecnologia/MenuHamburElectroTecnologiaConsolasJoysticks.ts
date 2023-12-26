import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaConsolasJoysticks extends BasePage {

    readonly CONSOLAS_JOYSTICKS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CONSOLAS_JOYSTICKS =this.page.locator('//a [@id="menu-item-category-consolas"]')
    }

    async clickElectroTecnologiaConsolasJoysticks(): Promise<void> {
        await this.click(this.CONSOLAS_JOYSTICKS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaConsolasJoysticks(): Promise<void> {
        await this.clickElectroTecnologiaConsolasJoysticks()
    }
}
